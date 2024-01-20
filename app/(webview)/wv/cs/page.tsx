import { HiSearch } from "react-icons/hi";
import FAQ from "./_components/Faq";
import styles from './page.module.scss';
import { loadFaqCateogries } from "@/app/_services/post";

export default async function CustomerCenter() {

    const faqCategories = (await loadFaqCateogries()).data
    return (<div >
        <div className={styles['cs-header-container']}>
            <div>
                <p>ㅋㅋㅋ님</p>
                <p>무엇을 도와드릴까요?</p>
            </div>
            <div className={styles['faq-search-container']} >
                <input className={styles['faq-search-input']} type='text' placeholder='파밍할 아이템을 검색해보세요!' />
                <HiSearch size={24} />
            </div>
        </div>
        <FAQ categories={faqCategories}/>

    </div>)
}
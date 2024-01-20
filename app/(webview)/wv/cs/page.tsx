import { HiSearch } from "react-icons/hi";
import FAQ from "./_components/Faq/FaqContainer";
import styles from './page.module.scss';
import { loadFaqCateogries } from "@/app/_services/post";
import { termsItems } from '../../../_data/tems'
import TermsItem from "./_components/Terms/TermsItem";

export default async function CustomerCenter() {

    const faqCategories = (await loadFaqCateogries()).data
    return (<div >
        <div className={styles['cs-header-container']}>
            <div className={styles['cs-header-title']}>
                <p>ㅋㅋㅋ님</p>
                <p>무엇을 도와드릴까요?</p>
            </div>
            <div className={styles['faq-search-container']} >
                <input className={styles['faq-search-input']} type='text' placeholder='파밍할 아이템을 검색해보세요!' />
                <HiSearch size={24} />
            </div>
        </div>
        <FAQ categories={faqCategories} />
        <div className={styles["cs-terms-container"]}>
            <p className={styles["cs-terms-container-title"]}>약관 및 정책</p>
            {

                termsItems.map((terms) => {
                    return (<div><TermsItem key={terms.title} terms={terms} /><hr /></div>)
                })
            }
        </div>

    </div>)
}
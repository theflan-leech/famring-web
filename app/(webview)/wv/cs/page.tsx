import { HiSearch } from "react-icons/hi";
import FaqContainer from "./_components/FaqContainer/FaqContainer";
import styles from './page.module.scss';
import { loadFaqCateogries } from "@/app/_services/post";
import TermsItem from "./_components/Terms/TermsItem";
import { loadTerms } from "@/app/_services/terms";

export default async function CustomerCenter() {
    const [terms, faqCategories] = await Promise.all([loadTerms(), loadFaqCateogries()]);

    return (<div >
       
        <FaqContainer categories={faqCategories.data} />
        <div className={styles["cs-terms-container"]}>
            <p className={styles["cs-terms-container-title"]}>약관 및 정책</p>
            {

                terms.data.map((terms) => {
                    return (<div key={terms.id}><TermsItem terms={terms} /><hr /></div>)
                })
            }
        </div>

    </div>)
}
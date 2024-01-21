
import { loadTermsDetail } from '@/app/_services/terms';
import styles from './page.module.scss'
export default async function TermsDetail({ params }: { params: { id: number } }) {
    const terms = (await loadTermsDetail(params.id)).data
    return (
        <div className={styles['terms-container-wrapper']} >

            <div className={styles['terms-container']} >
                {terms.content && <div className={styles['terms-content']} dangerouslySetInnerHTML={{ __html: terms.content }} />}
            </div>
        </div>
    );
}


import { loadNoticeDetail } from '@/app/_services/post';
import styles from './page.module.scss'
import { format } from 'date-fns';
export default async function NoticeDetail({ params }: { params: { id: number } }) {
    const notice = (await loadNoticeDetail(params.id)).data
    return (
        <>
            <div className={styles['notice-container']}>
                <div className={styles['notice-title-container']}>
                    <p className={styles['notice-created-date']}>{format(notice.createdDate, 'yyyy-MM-dd')}</p>

                    <h1 className={styles['notice-title']}>{notice.title}</h1>
                </div>
                <hr />
                <div className={styles['notice-detail-container']}>
                    {notice.content&&<div dangerouslySetInnerHTML={{ __html: notice.content }}/>}
                    
                </div>
            </div>
        </>
    );
}


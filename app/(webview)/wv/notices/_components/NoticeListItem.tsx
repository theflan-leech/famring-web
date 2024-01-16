import { HiArrowDown, HiChevronRight } from 'react-icons/hi'
import './NoticeListItem.scss'
import { Notice } from '@/app/_types/post'
import { format } from 'date-fns';
import Link from 'next/link';
export default function NoticeListItem({ notice }: { notice: Notice }) {
    return (
        <Link href={"/wv/notices/" + notice.id}>
            <div>
                <div className='notice-container'>
                    <div className='notice-title-container'>
                        <p className='notice-created-date'>{format(notice.createdDate, 'yyyy-MM-dd')}</p>
                        <h1 className='notice-title'>{notice.title}</h1>
                    </div>
                    <HiChevronRight size={24} />
                </div>
                <hr />
            </div>
        </Link>
    );
}
import { Terms } from '@/app/_types/terms';
import './TermsItem.scss'
import Link from 'next/link';
export default function TermsItem({ terms }: { terms: Terms }) {
    return (<div className='terms-item-container'>
        <Link href={terms.url}>
            <p className='terms-title'>{terms.title}</p></Link>
    </div>);
}
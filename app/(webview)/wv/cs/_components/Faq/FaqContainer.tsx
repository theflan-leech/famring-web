'use client'
import { useEffect, useState } from 'react'
import './FaqContainer.scss'
import { FaqCateogory } from '@/app/_types/post';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { loadFAQ } from '@/app/_services/post';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { HiChevronDown } from 'react-icons/hi';
import FAQItem from '../FaqItem/Faq';
import Link from 'next/link';
/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

export default function FAQ({ categories }: { categories: FaqCateogory[] }) {

    const queryClient = useQueryClient();
    const [selectedCategoryId, setSelectedCateogry] = useState<number | undefined>(undefined);
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['loadFAQ'],
        queryFn: () => loadFAQ(5, 0, selectedCategoryId),
        select: (response) => response?.data.data
    });
    useEffect(() => {
        refetch();
        return ()=>{
            queryClient.cancelQueries({ queryKey: ['loadFAQ'] })
        }
    }, [selectedCategoryId])

    return (
        <div>
            <div className='category-container'>
                {
                    <div className={'category-item' + (selectedCategoryId === undefined ? '-selected' : '')} onClick={() => {
                        setSelectedCateogry(undefined)
                    }}>전체</div>}
                {
                    categories?.map((cateogory) => {
                        return (<div key={cateogory.id} className={'category-item' + (selectedCategoryId === cateogory.id ? '-selected' : '')} onClick={() => {
                            setSelectedCateogry(cateogory.id)
                        }}>{cateogory.name}</div>)
                    })
                }

            </div>
            <Accordion className='faq-accordion'>
                {
                    data?.data.map((faq) => {
                        return (
                            <FAQItem key={faq.id} faq={faq} />
                        )
                    })
                }
            </Accordion>

            <hr style={{ margin: "0px 16px" }} />
            <Link href={{ pathname: "/wv/cs/faqs", query: { categoryId: selectedCategoryId } }}>
                <button className='more-button' >더보기 </button>
            </Link>
        </div>)
}
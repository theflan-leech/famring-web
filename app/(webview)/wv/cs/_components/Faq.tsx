'use client'
import { useEffect, useState } from 'react'
import './Faq.scss'
import { FaqCateogory } from '@/app/_types/post';
import { useQuery } from '@tanstack/react-query';
import { loadFAQ } from '@/app/_services/post';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { HiChevronDown } from 'react-icons/hi';
/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

export default function FAQ({ categories }: { categories: FaqCateogory[] }) {
    const [selectedCategoryId, setSelectedCateogry] = useState<number | undefined>(undefined);
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['loadFAQ'],
        queryFn: () => loadFAQ(5, 0, selectedCategoryId),
        select: (response) => response?.data.data
    });
    useEffect(() => {
        refetch();
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
                            <AccordionItem header={
                                <div className='faq-title-container'>
                                    <p className='faq-title'><span className='faq-title-category'>{faq.faqCategory.name}</span>What is Lorem Ipsum?</p>
                                    <HiChevronDown className='chevron-down' size={24} />
                                </div>
                            } key={faq.id}>
                                {faq.content}
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>

            <hr style={{margin : "0px 16px"}}/>
            <button className='more-button' >더보기 </button>
        </div>)
}
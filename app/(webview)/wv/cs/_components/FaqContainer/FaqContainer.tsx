'use client'
import { useEffect, useRef, useState } from 'react'
import './FaqContainer.scss'
import { FaqCateogory } from '@/app/_types/post';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { loadFAQ } from '@/app/_services/post';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { HiChevronDown, HiSearch } from 'react-icons/hi';
import FAQItem from '../FaqItem/Faq';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

export default function FaqContainer({ categories }: { categories: FaqCateogory[] }) {
    const router = useRouter();
    const searchInputRef = useRef<HTMLInputElement>(null);
 
    const queryClient = useQueryClient();
    const [selectedCategoryId, setSelectedCateogry] = useState<number | undefined>(undefined);
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['loadFAQ'],
        queryFn: () => loadFAQ(5, '',0, selectedCategoryId),
        select: (response) => response?.data.data
    });
    useEffect(() => {
        refetch();
        return () => {
            queryClient.cancelQueries({ queryKey: ['loadFAQ'] })
        }
    }, [selectedCategoryId])

    function handleKeyUp (e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            handleSearchClickEvent();
        }
    };
    function handleSearchClickEvent() {
        if (searchInputRef.current) {
            const inputValue = searchInputRef.current.value;
            inputValue ? router.push(`/wv/cs/faqs?categoryId=${(selectedCategoryId!=undefined?selectedCategoryId:'')}&query=${inputValue}`) : alert("검색어를 입력해주세요.")
        }

    }
    return (
        <div>
            <div className={'cs-header-container'}>
                <div className={'cs-header-title'}>
                    <p>ㅋㅋㅋ님</p>
                    <p>무엇을 도와드릴까요?</p>
                </div>
                <div className={'faq-search-container'} >
                    <input ref={searchInputRef} className={'faq-search-input'} type='text' placeholder='궁금하신 주제를 검색해주세요.' onKeyUp={handleKeyUp} />
                    <HiSearch size={24} onClick={()=>{handleSearchClickEvent()}} />
                </div>
            </div>
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
'use client'
import { loadFAQ, loadFaqCateogriesAxios } from "@/app/_services/post";
import { InfiniteData, QueryKey, useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react";
import styles from './page.module.scss';
import { HiChevronDown, HiSearch } from "react-icons/hi";
import InfiniteScroll from "react-infinite-scroller";
import { AxiosError, AxiosResponse } from "axios";
import FAQItem from "../_components/FaqItem/Faq";
import { FAQ } from "@/app/_types/post";
import { Accordion } from "@szhsin/react-accordion";
export default function FAQ() {
    const queryClient = useQueryClient();
    const searchParam = useSearchParams();
    const [categoryExpand, setCategoryExpand] = useState(false);
    const [fixedHeight, setFixedHeight] = useState(0);
    const [selectedCategory, setSelectedCateogry] = useState<number | undefined>(searchParam.get('categoryId') ? parseInt(searchParam.get('categoryId')!, 10) : undefined);
    const categoryQuery = useQuery({
        queryKey: ['loadFAQCategory'],
        queryFn: () => loadFaqCateogriesAxios(),
        select: (response) => response?.data.data
    });
    const categoryScrollContainerRef = useRef<HTMLDivElement>(null);
    const faqScrollContainerRef = useRef<HTMLDivElement>(null);
    const headerContainer = useRef<HTMLDivElement>(null);
    function handleCategorySelect(categoryId: string | null) {
        setCategoryExpand(false);
        setSelectedCateogry(categoryId ? parseInt(categoryId!, 10) : undefined);
    }
    useEffect(() => {
        if (headerContainer) {
            setFixedHeight(headerContainer.current?.clientHeight ? headerContainer.current?.clientHeight : 0);
        }
    }, []);
    useEffect(() => {
        if (selectedCategory === null && categoryScrollContainerRef.current) {
            console.log("scroll");
            categoryScrollContainerRef.current.scrollLeft = 0;
        }
        else {
            const scrollTarget = document.getElementById('category_' + selectedCategory);
            if (scrollTarget)
                scrollTarget.scrollIntoView({ behavior: 'smooth' });
        }
    }, [categoryExpand])

    var pageNumber = 0;
    const faqs
        = useInfiniteQuery<AxiosResponse, AxiosError, InfiniteData<AxiosResponse<any, any>>, QueryKey, number>({
            queryKey: ['loadFaqs'],
            queryFn: ({ pageParam = 0 }) => loadFAQ(10, pageParam as number, selectedCategory),
            initialPageParam: 0,
            getNextPageParam: (lastPage, allPages, lastPageParam) => {
                if (lastPage.data.data.end) {
                    return undefined;
                }
                else {
                    return (lastPageParam as number) + 1;
                }
            },
        }
        );
    useEffect(() => {
        if (faqScrollContainerRef.current) {
            faqScrollContainerRef.current.scrollIntoView();
          }
        faqs.refetch();
        return ()=>{
            queryClient.cancelQueries({ queryKey: ['loadFaqs']});
        }
    }, [selectedCategory])

    return (<div >
        <div className={styles['faq-header']} ref={headerContainer}>
            <div className={styles['faq-search-container-wrapper']}>
                <div className={styles['faq-search-container']} >
                    <input className={styles['faq-search-input']} type='text' placeholder='파밍할 아이템을 검색해보세요!' />
                    <HiSearch size={24} />
                </div>
            </div>
            <div className={styles["faq-tag-container-wrapper"]} >
                <div ref={categoryScrollContainerRef} className={categoryExpand ? styles["faq-tag-container-expand"] : styles["faq-tag-container"]}>
                    <div className={selectedCategory === undefined ? styles['faq-tag-item-selected'] : styles['faq-tag-item']} onClick={() => { handleCategorySelect(null) }}>전체</div>
                    {
                        categoryQuery.data?.map((category) => {
                            return (<div key={category.id} id={"category_" + category.id.toString()} className={category.id === selectedCategory ? styles['faq-tag-item-selected'] : styles['faq-tag-item']}
                                onClick={() => { handleCategorySelect(category.id.toString()) }}>{category.name}</div>)
                        })
                    }
                </div>
                <div className={styles["faq-tag-arrow-container"]} onClick={() => { setCategoryExpand(!categoryExpand) }}>
                    <HiChevronDown size={24} />
                </div>
            </div>
        </div>
        <div >

            <div ref={faqScrollContainerRef} style={{ height: '0' }} />
            <InfiniteScroll hasMore={faqs.hasNextPage} loadMore={() => faqs.fetchNextPage()} style={{ paddingTop: `${fixedHeight}px` }}>
                <div className={styles['faq-item-wrapper']}>
                    <Accordion className='faq-accordion'>
                        {
                            faqs.data?.pages.map((item) => {
                                return item.data.data.data.map((faq: FAQ) => {
                                    return <FAQItem key={faq.id} faq={faq} />
                                })

                            })


                        }
                    </Accordion>
                </div>

            </InfiniteScroll>
        </div>
    </div>)
}
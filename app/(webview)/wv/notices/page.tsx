'use client'
import styles from "./page.module.scss";
import { Product } from '@/app/_types/product';
import { AxiosError, AxiosResponse, } from "axios";
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from "@tanstack/react-query";
import NoticeListItem from "./_components/NoticeListItem";
import { loadNotices } from "@/app/_services/post";
import { Notice } from "@/app/_types/post";
export const dynamic = 'force-dynamic';//를 추가하면 다이나믹으로 강제화
export default function Notice() {
    const { data, isLoading, fetchNextPage, hasNextPage }
        = useInfiniteQuery<AxiosResponse, AxiosError>({
            queryKey: ['loadProducts'],
            queryFn: ({ pageParam = "" }) => loadNotices(pageParam as string),
            initialPageParam: undefined,
            getNextPageParam: (lastPage) => {
                if (lastPage.data.data.end) {
                    return undefined;
                }
                else {
                    const notices = lastPage.data.data.data;
                    return notices[notices.length - 1].createdDate;
                }
            },
        }
        );
    return (
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
            <div className={styles['product-item-wrapper']}>
                {
                    data?.pages.map((item) => {
                        return item.data.data.data.map((notice: Notice) => {
                            return <NoticeListItem key={notice.id} notice={notice} />
                        })

                    })
                }
            </div>

        </InfiniteScroll>
    );
}

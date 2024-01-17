'use client'
import styles from "./page.module.scss";
import ProductListItem from '@/app/_components/product/list/ProductListItem';
import { Product } from '@/app/_types/product';
import { AxiosError, AxiosResponse, } from "axios";
import { loadProducts } from "../../_services/product";
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from "@tanstack/react-query";
import LoadMoreButton from "@/app/_components/loadmore/button/LoadMoreButton";
export const dynamic = 'force-dynamic';//를 추가하면 다이나믹으로 강제화
export default function Product() {
  const { data, isLoading, fetchNextPage, hasNextPage }
        = useInfiniteQuery<AxiosResponse, AxiosError>({
            queryKey: ['loadProducts'],
            queryFn: ({ pageParam = "" }) => loadProducts(pageParam as string),
            initialPageParam: undefined,
            getNextPageParam: (lastPage) => {
                if (lastPage.data.data.end) {
                    return undefined;
                }
                else {
                    const products = lastPage.data.data.products;
                    return products[products.length - 1].registeredDate;
                }
            },
        }


        );
    return (

        <div >
            <div className="page-banner" />
            <h1 className='page-title'>파밍할 아이템을 탐색해보세요!</h1>
            {/* <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}> */}
            <div className={styles['product-item-wrapper']}>
                {
                    data?.pages.map((item) => {
                        return item.data.data.products.map((product: Product) => {
                            return <ProductListItem key={product.id} product={product} />
                        })

                    })
                }
            </div>
            {
                hasNextPage ? <LoadMoreButton onClick={()=>{fetchNextPage()}}/> : null
            }
            {/* </InfiniteScroll> */}
        </div>
    );
}
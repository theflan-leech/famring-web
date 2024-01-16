
import styles from './page.module.scss'
import { loadProductDetail } from '@/app/_services/product';
import { BaseResponse } from "../../../_types/response";
import { ProductDetail } from "@/app/_types/product";
import { Carousel } from 'react-responsive-carousel';
import ProductImageCrousel from './_components/ProductImageCrousel/ProductImageCrousel.tsx';
import { getProductDate } from '@/app/_utils/productUtils.ts';
import Deeplink from '../../../_components/deeplink/DeepLink.tsx';
import { NextSeo } from 'next-seo';
export default async function ProductDetail({ params }: { params: { id: number } }) {
    const product = (await loadProductDetail(params.id)).data
    return (
            <div className={styles['product-detail-container']}>
                <Deeplink scheme='product' query={'id=' + params.id} />
                {
                    <ProductImageCrousel images={product.images} />
                }
                <div className={styles['product-title-container-wrapper']}>
                    <div className={styles['product-title-container']}>
                        <p className={styles['product-address']}>{product.town.fullAddress}</p>
                        <h1 className={styles['product-title']}>{product.title}</h1>
                        <p className={styles['product-price']}>{product.price.toLocaleString()}원</p>

                        <p className={styles['product-category']}>{product.platform.name}/{product.category.name}・{getProductDate(product.registeredDate, product.pullUp)}</p>
                    </div>
                    <div className={styles['product-flex-empty']} />
                    <button className={styles['button-open-app']}>앱에서 보기</button>
                </div>
                <hr />
                <div className={styles['user-container']}>
                    {
                        <div className={styles['user-profile-image']} style={{ backgroundImage: 'url(' + (product.writer?.profileImage ? product.writer.profileImage : '') + ")" }} />
                    }
                    <p className={styles['user-name']}>{product.writer?.nickname}</p>
                </div>
                <hr />
                <div className={styles['product-detail']}>
                    <p className={styles['product-detail-title']}>상세설명</p>
                    <article>
                        {product.details}
                    </article>
                </div>
            </div>
    );
}


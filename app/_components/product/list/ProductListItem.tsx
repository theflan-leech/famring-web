import { Product } from '@/app/_types/product';
import './ProductListItem.scss'
import Link from 'next/link';

export default function ProductListItem({ product }: { product: Product }) {

    return (
        <div className='product-item-container'>
            <Link href={"/products/" + product.id}>
                <div className='product-item'>
                    <img className='product-thumbnail' src={product.thumbnail} />
                    <h2 className='product-title'>{product.title}</h2>
                    <p className='product-price'>{product.price?.toLocaleString()+"원"}</p>
                    <p className='product-town'>{product.townName}</p>
                    <p className='product-additional-information'>
                        {`관심 : ${product.likeCount?.toLocaleString()} 채팅 ${product.chatCount?.toLocaleString()}`}
                    </p>
                </div>
            </Link>
        </div>
    );

}
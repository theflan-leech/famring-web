'use client'

import "./ProductImageCrousel.scss"
import { ProductImage } from "@/app/_types/product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ProductImageCrousel({ images }: { images: ProductImage[] }) {
    return (
            <Carousel showArrows={true}
                showIndicators={true}
                centerMode={false}
                showThumbs={false}
                className=".carousel"
                emulateTouch={true}
                showStatus={false}
                width={'100%'}
                dynamicHeight={true}>
                {
                    images.map((image) => {
                         
                        return <div key={image.id} className='image-container'>
                            <img src={image.imageUrl} className="image" />

                        </div>
                    }
                    )
                }
            </Carousel>
    );
}
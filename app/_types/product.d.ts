import { SaleStatus } from "./enum";
import { User } from "./user";
export type Product = {
    id: number,
    thumbnail: string,
    title: string,
    price: number,
    likeCount: number,
    chatCount: number,
    townName: string,
    status: SaleStatus,
    reserved: boolean,
    pullUp: boolean,
    registeredDate: string,
    nextPullUpEnableDate: string,
    myProduct: boolean,
    receiveReview: boolean,
    sendReview: boolean,
    reserveMember: User | undefined,
    purchaseMember: User | undefined,
    hidden: boolean,
    purchaseDate: string | undefined,
}
export type ProductDetail = {
    id: number,
    images: ProductImage[],
    title: string,
    price: number,
    containAdultProduct: boolean,
    details: string,
    viewCount: number,
    likeCount: number,
    chatCount: number,
    category: ProductCategory,
    platform: ProductPlatform,
    town: ProductTown,
    writer: User,
    like: boolean,
    myProduct: boolean,
    saleLocationName: string?,
    saleLocationLatitude: number?,
    saleLocationLongitude: number?,
    registeredDate: string,
    nextPullUpEnableDate: string,
    status: SaleStatus,
    hidden: boolean,
    reserved: boolean,
    pullUp: boolean,
    reserveMember: User | undefined,
    purchaseMember: User | undefined,
    receiveReview: boolean?,
    sendReview: boolean?,
    thumbnail: string,
}
export type ProductCategory = {
    id: number,
    name: string,
    platformId: number
}
export type ProductPlatform = {
    id: number,
    name: string,
}
export type ProductImage={
    id: number,
    imageUrl: string,

}
export type ProductTown={
    emdCode: number,
    emdName: string,
    fullAddress: string,
    latitude: number,
    longitude: number

}
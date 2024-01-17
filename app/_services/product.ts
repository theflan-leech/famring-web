import { BASE_URL, axiosClient } from "./base"
import { BaseResponse, LoadMoreProductPageData } from "../_types/response";
import { Product, ProductDetail } from "@/app/_types/product";
export const loadProducts = async (pageParam?:string) => {
  const response= await axiosClient.get<BaseResponse<LoadMoreProductPageData<Product>>>("/api/v1/web/products",{params: {onSale: true, lastRegisteredDate: pageParam,size:12}})
  return response

}
export const loadProductDetail = async (id?:number):Promise<BaseResponse<ProductDetail>> => {
  const response=await fetch( BASE_URL+"/v1/web/products/"+id,{ next: { revalidate: 10 } });
  const result= await response.json()
  return result

}

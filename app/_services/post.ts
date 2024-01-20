import { BASE_URL, axiosClient } from "./base"
import { BaseResponse, LoadMorePageData } from "../_types/response";
import { FAQ, FaqCateogory, Notice } from "../_types/post";
export const loadNotices = async (pageParam?: string) => {
  const response = await axiosClient.get<BaseResponse<LoadMorePageData<Notice>>>("/api/v1/web/notices", { params: { onSale: true, lastRegisteredDate: pageParam, size: 12 } });
  return response
}
export const loadNoticeDetail = async (id?: number): Promise<BaseResponse<Notice>> => {
  const response = await fetch(BASE_URL + "/v1/web/notices/" + id,{ next: { revalidate: 10 } });
  const result = await response.json()
  return result

}

export const loadFaqCateogries = async (): Promise<BaseResponse<FaqCateogory[]>> => {
  const response = await fetch(BASE_URL + "/v1/web/faqs/categories");
  const result = await response.json()
  console.log(result);
  return result

}

export const loadFAQ = async (size :number,page?: number, categoryId?:number ,) => {
  const response = await axiosClient.get<BaseResponse<LoadMorePageData<FAQ>>>("/api/v1/web/faqs", { params: { categoryId: categoryId, page: page, size: size } });
  return response
}
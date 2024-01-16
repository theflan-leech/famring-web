import axios from "axios";
import { BASE_URL, axiosClient } from "./base"
import { BaseResponse, LoadMorePageData } from "../_types/response";
import { Notice } from "../_types/post";
export const loadNotices = async (pageParam?: string) => {
  const response = await axiosClient.get<BaseResponse<LoadMorePageData<Notice>>>("/api/v1/web/notices", { params: { onSale: true, lastRegisteredDate: pageParam, size: 12 } })
  return response
}
export const loadNoticeDetail = async (id?: number): Promise<BaseResponse<Notice>> => {
  const response = await fetch(BASE_URL + "/v1/web/notices/" + id,{ next: { revalidate: 10 } });
  const result = await response.json()
  return result

}

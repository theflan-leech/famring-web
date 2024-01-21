import { BASE_URL, axiosClient } from "./base"
import { BaseResponse, LoadMorePageData } from "../_types/response";
import { Terms } from "../_types/terms";
export const loadTerms = async (): Promise<BaseResponse<Terms[]>> => {
    const response = await fetch(BASE_URL + "/v1/terms",{ next: { revalidate: 10 } });
    const result = await response.json()
    return result
  
  }

  export const loadTermsDetail = async (id?: number): Promise<BaseResponse<Terms>> => {
    const response = await fetch(BASE_URL + "/v1/terms/" + id,{ next: { revalidate: 10 } });
    const result = await response.json()
    return result
  
  }
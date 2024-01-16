export type BaseResponse<T> = {
    data: T,
    status:BaseResponseStatus
}
export type BaseResponseStatus = {
    time: string,
    success: boolean,
    code: number,
    message: string
}

export type LoadMorePageData<T> = {
    data: T[],
    end: boolean,
}
export type LoadMoreProductPageData<T> = {
    products: T[],
    end: boolean,
}
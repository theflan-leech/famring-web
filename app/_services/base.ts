import  axios, {Axios, AxiosRequestConfig }  from "axios"

export const BASE_URL=process.env.SERVER_HOST
export const axiosClient: Axios = axios.create({
    headers: {
      'Content-Type': 'application/json',
    }
  })
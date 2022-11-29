import axios from "axios"

export const backendFetch = async (requestParams) => {
  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST || "http://localhost:5000"
  const axiosAPI = axios.create()
  axiosAPI.defaults.baseURL = `${BACKEND_HOST}/api`
  axiosAPI.defaults.withCredentials = true

  const res = await axiosAPI(requestParams)
  return res.data
}

export const mockBackendFetch = async (requestParams) => {
  const axiosLocal = axios.create()
  axiosLocal.defaults.baseURL = "/api"
  axiosLocal.defaults.withCredentials = true

  const res = await axiosLocal(requestParams)
  return res.data
}

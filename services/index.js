import axios from "axios"

export const backendFetch = async (requestParams) => {
  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST || "http://localhost:5000"

  axios.defaults.withCredentials = true
  requestParams.url = BACKEND_HOST + "/api" + requestParams.url

  const res = await axios(requestParams)
  return res.data
}

export const mockBackendFetch = async (requestParams) => {
  axios.defaults.baseURL = "/api"
  axios.defaults.withCredentials = true

  const res = await axios(requestParams)
  return res.data
}

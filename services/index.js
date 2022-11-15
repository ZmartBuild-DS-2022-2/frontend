import axios from "axios"

const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST || "http://localhost:5000"
axios.defaults.withCredentials = true

export const backendFetch = async (requestParams) => {
  // In this case the url must have the correct backend host and not the mock-server host
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

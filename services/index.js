import axios from "axios"

const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST || "http://localhost:5000"
axios.defaults.baseURL = `${BACKEND_HOST}/api`
axios.defaults.withCredentials = true

export const backendFetch = async (requestParams) => {
  const res = await axios(requestParams)
  return res.data
}

import axios from "axios"

const BASE_URL = `/api/`

axios.defaults.withCredentials = true

export const apiGet = async (url) => {
  const response = await axios.get(`${BASE_URL}${url}`)
  const data = response.data
  return data
}
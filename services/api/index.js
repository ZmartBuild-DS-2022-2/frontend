import axios from "axios"

const BASE_URL = `/api/`

axios.defaults.withCredentials = true

export const apiGet = async (url, config) => {
  const response = await axios.get(`${BASE_URL}${url}/`, config)
  const data = response.data
  return data
}

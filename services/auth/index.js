import axios from "axios"

const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST
const BASE_URL = `${BACKEND_HOST}/api/auth`

axios.defaults.withCredentials = true

export const registerService = async (data) => {
  const user = await axios.post(`${BASE_URL}/register`, data)
  return user
}

export const loginService = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials)
  const user = response.data
  return user
}

export const refreshTokenService = async () => {
  const response = await axios.post(`${BASE_URL}/refresh`)
  const user = response.data
  return user
}

export const logoutService = async () => {
  await axios.delete(`${BASE_URL}/logout`)
}

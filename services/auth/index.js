import axios from "axios"

const BASE_URL = "http://localhost:5000/api/auth"
axios.defaults.withCredentials = true

export const loginService = async (credentials) => {
  const user = await axios.post(`${BASE_URL}/login`, credentials)
  return user
}

export const registerService = async (data) => {
  const user = await axios.post(`${BASE_URL}/register`, data)
  return user
}

export const logoutService = async () => {
  await axios.delete(`${BASE_URL}/logout`)
}
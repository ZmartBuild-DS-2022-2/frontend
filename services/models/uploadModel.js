import axios from "axios"

const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST
const BASE_URL = `${BACKEND_HOST}/api`

axios.defaults.withCredentials = true

export const uploadModel = async (data) => {
  const res = await axios.post(`${BASE_URL}/models/upload_model`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return res.data?.gltfFileUrl
}

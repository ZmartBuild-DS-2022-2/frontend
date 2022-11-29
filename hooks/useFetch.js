import axios from "axios"
import { useState, useEffect } from "react"

export const useFetch = (requestParams) => {
  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST || "http://localhost:5000"
  const axiosAPI = axios.create()
  axiosAPI.defaults.baseURL = `${BACKEND_HOST}/api`
  axiosAPI.defaults.withCredentials = true
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData(requestParams)
  }, [])

  const fetchData = async (requestParams) => {
    try {
      const res = await axiosAPI(requestParams)
      setResponse(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return [response, isLoading, error]
}

// This is just a mock custom hook and should be deleted when backend endpoint is ready
export const useMockFetch = (requestParams) => {
  const axiosLocal = axios.create()
  axiosLocal.defaults.baseURL = "/api"
  axiosLocal.defaults.withCredentials = true

  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData(requestParams)
  }, [])

  const fetchData = async (requestParams) => {
    try {
      const res = await axiosLocal(requestParams)
      setResponse(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return [response, isLoading, error]
}

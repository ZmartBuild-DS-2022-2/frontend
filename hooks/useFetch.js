import axios from "axios"
import { useState, useEffect } from "react"

export const useFetch = (requestParams) => {
  // const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST || "http://localhost:5000"
  const BACKEND_HOST =
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
      ? ""
      : process.env.NEXT_PUBLIC_BACKEND_HOST || "http://localhost:5000"

  axios.defaults.baseURL = `${BACKEND_HOST}/api`
  axios.defaults.withCredentials = true
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData(requestParams)
  }, [])

  const fetchData = async (requestParams) => {
    try {
      const res = await axios(requestParams)
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
  axios.defaults.baseURL = "/api"
  axios.defaults.withCredentials = true
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData(requestParams)
  }, [])

  const fetchData = async (requestParams) => {
    try {
      const res = await axios(requestParams)
      setResponse(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return [response, isLoading, error]
}

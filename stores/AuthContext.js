import { useRouter } from "next/router"
import { useState, createContext, useEffect } from "react"
import { backendFetch } from "../services"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  

  const login = async (credentials) => {
    setIsLoading(true)
    const user = await backendFetch({ url: "/auth/login", method: "post", data: credentials })
    setUser(user)
    setIsLoading(false)
    router.push({ pathname: "/" })
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      await backendFetch({ url: "/auth/logout", method: "delete" })
    } finally {
      setUser(null)
      setIsLoading(false)
      router.push({ pathname: "/" })
    }
  }

  useEffect(() => {
    setIsLoading(true)
    const refresh = async () => {
      try {
        const user = await backendFetch({ url: "/auth/refresh", method: "post" })
        setUser(user)
      } catch (err) {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }
    refresh()
  }, [children])

  const context = { user, isLoading, login, logout }
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext

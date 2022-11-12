import { useRouter } from "next/router"
import { useState, useEffect, createContext } from "react"
import { backendFetch } from "../services"

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const login = async (credentials) => {
    const user = await backendFetch({ url: "/auth/login", method: "post", data: credentials })
    setUser(user)
    setIsLoading(false)
    router.push({ pathname: "/" })
  }

  const logout = async () => {
    try {
      await backendFetch({ url: "/auth/logout", method: "delete" })
    } finally {
      setUser(null)
      setIsLoading(false)
      router.push({ pathname: "/" })
    }
  }

  useEffect(() => {
    const refresh = async () => {
      try {
        const user = await backendFetch({ url: "/auth/refresh", method: "post" })
        setUser(user)
      } catch (err) {
        setUser(null)
      }
      setIsLoading(false)
    }
    refresh()
  }, [])

  const context = { user, isLoading, login, logout }
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext

import { useRouter } from "next/router"
import { useState, useEffect, createContext } from "react"
import { loginService, refreshTokenService, logoutService } from "../services/auth"

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
    const user = await loginService(credentials)
    setUser(user)
    setIsLoading(false)
    router.push({ pathname: "/" })
  }

  const logout = async () => {
    try {
      await logoutService()
    } finally {
      setUser(null)
      setIsLoading(false)
      router.push({ pathname: "/" })
    }
  }

  useEffect(() => {
    const refresh = async () => {
      try {
        const user = await refreshTokenService()
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

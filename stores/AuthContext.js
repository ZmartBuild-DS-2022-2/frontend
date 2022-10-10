import { useRouter } from "next/router"
import { useState, useEffect, createContext } from "react"
import { loginService, logoutService } from "../services/auth"

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(null)

  const login = async (credentials) => {
    const user = await loginService(credentials)
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
    router.push({ pathname: "/" })
  }

  const logout = async () => {
    await logoutService()
    setUser(null)
    localStorage.removeItem("user")
    router.push({ pathname: "/" })
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const context = { user, login, logout }
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext

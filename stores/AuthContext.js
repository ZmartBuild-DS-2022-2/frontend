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

  const login = async (credentials) => {
    const user = await backendFetch({
      url: "/auth/login",
      method: "post",
      data: credentials,
    })
    setUser(user)
    router.push({ pathname: "/" })
  }

  const logout = async () => {
    try {
      await backendFetch({
        url: "/auth/logout",
        method: "delete",
      })
    } finally {
      setUser(null)
      router.push({ pathname: "/" })
    }
  }

  useEffect(() => {
    const refresh = async () => {
      try {
        const user = await backendFetch({
          url: "/auth/refresh",
          method: "post",
        })
        setUser(user)
      } catch (err) {
        setUser(null)
      }
    }
    refresh()
  }, [])

  const context = { user, login, logout }
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext

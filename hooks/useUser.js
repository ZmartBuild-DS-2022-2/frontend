import { useContext, useState, useEffect } from "react"
import AuthContext from "../stores/AuthContext"

export const useUser = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined)
  const [isLoadingUser, setIsLoadingUser] = useState(true)
  const { user, isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (!isLoading && user) {
      setIsAuthenticated(true)
      setIsLoadingUser(false)
    }
    if (!isLoading && !user) {
      setIsAuthenticated(false)
      setIsLoadingUser(false)
    }
  }, [user, isLoading])
  return [isAuthenticated, isLoadingUser]
}

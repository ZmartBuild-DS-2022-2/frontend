import { useState, createContext } from "react"

const AuthContext = createContext({
  user: null,
  authenticated: false,
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthContext

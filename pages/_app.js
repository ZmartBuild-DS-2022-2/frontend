import { useEffect, useState } from "react"
import { AuthContextProvider } from "../stores/AuthContext"
import { initMocks } from "../mocks"
import "../styles/globals.css"

const API_MOCKING = process.env.NEXT_PUBLIC_API_MOCKING === "enabled"

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  // This is necessary because this prevents the mockserver loaded after
  // the app itself starts running, that way the endpoints will exist.
  useEffect(() => {
    if (API_MOCKING) {
      initMocks().then(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <AuthContextProvider>
      <div className="bg-gradient-to-r from-gray-50 to-white h-screen">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  )
}

export default MyApp

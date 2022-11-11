import { AuthContextProvider } from "../stores/AuthContext"
import "../styles/globals.css"

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks")
}

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <div className="bg-gradient-to-r from-gray-50 to-white h-screen">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  )
}

export default MyApp

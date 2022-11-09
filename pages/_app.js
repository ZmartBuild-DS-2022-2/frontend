import { AuthContextProvider } from "../stores/AuthContext"
import "../styles/globals.css"

require("../mocks")

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <div className="bg-gradient-to-r h-screen">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  )
}

export default MyApp

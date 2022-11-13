import LoginForm from "../components/LoginForm"
import PageSpinner from "../components/PageSpinner"
import { useUser } from "../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Login() {
  const [isAuthenticated, isLoadingUser] = useUser()
  const router = useRouter()

  useEffect(() => {
    isAuthenticated && router.push("/")
  }, [router, isAuthenticated])

  return (
    <>
      {isLoadingUser || isAuthenticated ? (
        <div className="grid h-screen place-items-center">
          <PageSpinner />
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  )
}

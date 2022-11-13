import RegisterForm from "../components/RegisterForm"
import { useUser } from "../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"
import PageSpinner from "../components/PageSpinner"

export default function Register() {
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
        <RegisterForm />
      )}
    </>
  )
}

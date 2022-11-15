import Head from "next/head"
import PageSpinner from "../../../../components/PageSpinner"
// import SubprojectForm from "../../../../components/subprojects/SubprojectForm"
import Header from "../../../../components/header/Header"
import { useUser } from "../../../../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NewProject() {
  const [isAuthenticated, isLoadingUser] = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!isLoadingUser && !isAuthenticated) {
      router.push("/login")
    }
  }, [router, isAuthenticated, isLoadingUser])

  return (
    <>
      <Head>
        <title>New subproject - ZmartBuild</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!isAuthenticated || isLoadingUser ? (
        <div className="grid h-screen place-items-center">
          <PageSpinner />
        </div>
      ) : (
        <>
          <Header />
          <main>{/* <SubprojectForm /> */}</main>
        </>
      )}
    </>
  )
}

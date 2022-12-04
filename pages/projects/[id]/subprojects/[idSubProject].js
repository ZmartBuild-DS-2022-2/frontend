import Head from "next/head"
import PageSpinner from "../../../../components/PageSpinner"
import Header from "../../../../components/header/Header"
import { useUser } from "../../../../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useFetch } from "../../../../hooks/useFetch"
import SubprojectInfo from "../../../../components/subprojects/SubprojectInfo"

export default function Home() {
  const [isAuthenticated, isLoadingUser] = useUser()
  const router = useRouter()
  const [subprojectData, isLoading, error] = useFetch({
    url: `/subprojects/${router.query.idSubProject}`,
    method: "get",
  })

  useEffect(() => {
    if (!isLoadingUser && !isAuthenticated) {
      router.push("/login")
    }
  }, [router, isAuthenticated, isLoadingUser])

  return (
    <>
      <Head>
        <title>ZmartBuild</title>
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
          <main>
            {isLoading && !error && (
              <div className="grid h-screen place-items-center">
                <PageSpinner />
              </div>
            )}

            {!isLoading && error && <div>{JSON.stringify(error)}</div>}

            {subprojectData && (
              <section className="grid place-items-center w-11/12 lg:w-3/4 mx-auto lg:my-10">
                <SubprojectInfo data={subprojectData} />
              </section>
            )}
          </main>
        </>
      )}
    </>
  )
}

import { useMockFetch } from "../../hooks/useFetch"
import Head from "next/head"
import Header from "../../components/header/Header"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"
import PageSpinner from "../../components/PageSpinner"
import ProjectInfo from "../../components/projects/ProjectInfo"

export default function Home() {
  const router = useRouter()
  const [projectData, isLoading, error] = useMockFetch({
    url: `/projects/${router.query.id}`,
    method: "get",
  })
  const [isAuthenticated, isLoadingUser] = useUser()

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

            {projectData && (
              <section className="grid place-items-center w-11/12 lg:w-3/4 mx-auto lg:my-10">
                <ProjectInfo data={projectData} />
              </section>
            )}
          </main>
        </>
      )}
    </>
  )
}

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
  const [project, isLoading, error] = useMockFetch({
    url: "/project",
    method: "get",
    params: router.query,
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

            <ProjectInfo project={project} />
          </main>
        </>
      )}
    </>
  )
}

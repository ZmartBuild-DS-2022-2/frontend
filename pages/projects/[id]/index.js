import Head from "next/head"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useFetch } from "../../../hooks/useFetch"
import { useUser } from "../../../hooks/useUser"
import PageSpinner from "../../../components/PageSpinner"
import Header from "../../../components/header/Header"
import ProjectInfo from "../../../components/projects/ProjectInfo"

export default function Project() {
  const [isAuthenticated, isLoadingUser] = useUser()
  const router = useRouter()

  const [projectData, isLoading, error] = useFetch({
    url: `/projects/${router.query.id}`,
    method: "get",
  })

  const [subprojects, subprojectsLoading] = useFetch({
    url: `/projects/${router.query.id}/subprojects`,
    method: "get",
  })

  useEffect(() => {
    if (!isLoadingUser && !isAuthenticated) router.push("/login")
  }, [router, isAuthenticated, isLoadingUser])

  useEffect(() => {
    if (!isLoading && error && error.response.status == "401") router.push("/")
  }, [router, isLoading, error])

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
            {(isLoading || subprojectsLoading) && !error && (
              <div className="grid h-screen place-items-center">
                <PageSpinner />
              </div>
            )}

            {!error && projectData && (
              <ProjectInfo
                projectData={projectData}
                subprojects={subprojects}
                isAdmin={projectData.projectPermission.role == "a"}
                isWritter={projectData.projectPermission.role == "w"}
              />
            )}
          </main>
        </>
      )}
    </>
  )
}

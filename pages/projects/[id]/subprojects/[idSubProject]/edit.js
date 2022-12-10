import Head from "next/head"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from "../../../../../hooks/useUser"
import { useFetch } from "../../../../../hooks/useFetch"
import PageSpinner from "../../../../../components/PageSpinner"
import Header from "../../../../../components/header/Header"
import SubprojectForm from "../../../../../components/subprojects/SubprojectForm"

export default function EditProject() {
  const router = useRouter()
  const [isAuthenticated, isLoadingUser] = useUser()

  useEffect(() => {
    if (!isLoadingUser && !isAuthenticated) {
      router.push("/login")
    }
  }, [router, isAuthenticated, isLoadingUser])

  const [subprojectData, isLoading, error] = useFetch({
    url: `/subprojects/${router.query.idSubProject}`,
    method: "get",
  })

  useEffect(() => {
    if (
      (!isLoading &&
        subprojectData &&
        !(
          subprojectData.project.projectUsers[0].projectPermission.role == "a" ||
          subprojectData.project.projectUsers[0].projectPermission.role == "w"
        )) ||
      error
    ) {
      router.push(`/subprojects/${router.query.idSubProject}`)
    }
  }, [isLoading, router, error, subprojectData])

  return (
    <>
      <Head>
        <title>Edit Subproject - ZmartBuild</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!isAuthenticated || isLoadingUser || isLoading || error ? (
        <div className="grid h-screen place-items-center">
          <PageSpinner />
        </div>
      ) : (
        <>
          <Header />
          <main>
            <SubprojectForm isAddMode={false} projectData={subprojectData} />
          </main>
        </>
      )}
    </>
  )
}

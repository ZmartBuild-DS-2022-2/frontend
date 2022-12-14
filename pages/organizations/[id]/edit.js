import Head from "next/head"
import PageSpinner from "../../../components/PageSpinner"
import OrganizationForm from "../../../components/organizations/OrganizationForm"
import Header from "../../../components/header/Header"
import { useUser } from "../../../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useFetch } from "../../../hooks/useFetch"

export default function EditOrganization() {
  const [isAuthenticated, isLoadingUser] = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!isLoadingUser && !isAuthenticated) {
      router.push("/login")
    }
  }, [router, isAuthenticated, isLoadingUser])

  const { id } = router.query
  // eslint-disable-next-line no-empty
  const [organizationData, isLoading, error] = useFetch({
    url: `/organizations/${id}`,
    method: "get",
  })

  useEffect(() => {
    if (
      (!isLoading &&
        organizationData &&
        !(
          organizationData.organizationPermission.role == "a" ||
          organizationData.organizationPermission.role == "w"
        )) ||
      error
    ) {
      router.push(`/organizations/${id}`)
    }
  }, [id, isLoading, organizationData, router, error])

  return (
    <>
      <Head>
        <title>Edit Organization - ZmartBuild</title>
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
          <main className="">
            <OrganizationForm isAddMode={false} organizationData={organizationData} />
          </main>
        </>
      )}
    </>
  )
}

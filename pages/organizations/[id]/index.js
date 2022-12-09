/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "../../../hooks/useFetch"
import Head from "next/head"
import Header from "../../../components/header/Header"
import { useUser } from "../../../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"
import PageSpinner from "../../../components/PageSpinner"
import OrganizationInfo from "../../../components/organizations/OrganizationInfo"

export default function Home() {
  const [isAuthenticated, isLoadingUser] = useUser()
  const router = useRouter()

  const [organizationData, isLoading, error] = useFetch({
    url: `/organizations/${router.query.id}`,
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
            {isLoading && !error && (
              <div className="grid h-screen place-items-center">
                <PageSpinner />
              </div>
            )}

            {organizationData && (
              <section className="grid place-items-center mx-auto lg:my-10">
                <OrganizationInfo
                  organizationData={organizationData}
                  isAdmin={organizationData.organizationPermission.role == "a"}
                  isWritter={organizationData.organizationPermission.role == "w"}
                />
              </section>
            )}
          </main>
        </>
      )}
    </>
  )
}

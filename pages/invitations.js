import Head from "next/head"
import Header from "../components/header/Header"
import PageSpinner from "../components/PageSpinner"
import CollapseInvitation from "../components/CollapseInvitation"
import { useMockFetch } from "../hooks/useFetch"
import { useUser } from "../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Invitations() {
  const [invitations, isLoading, error] = useMockFetch({ url: "/invitations", method: "get" })
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
        <title>Invitations - ZmartBuild</title>
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
            <div className="flex-col items-center text-center my-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">My Invitations</h1>
            </div>

            {isLoading && !error && (
              <div className="grid place-items-center h-72 lg:h-80">
                <PageSpinner />
              </div>
            )}
            <div className="flex flex-row min-h-screen justify-center items-cente">
              <CollapseInvitation
                isLoading={isLoading}
                error={error}
                invitations={invitations.organization}
                type={"Organization"}
              />
              <CollapseInvitation
                isLoading={isLoading}
                error={error}
                invitations={invitations.project}
                type={"Project"}
              />
            </div>
          </main>
        </>
      )}
    </>
  )
}

import { useMockFetch } from "../../../../hooks/useFetch"
import Head from "next/head"
import Header from "../../../../components/header/Header"
import { useUser } from "../../../../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"
import PageSpinner from "../../../../components/PageSpinner"
import SubprojectCard from "../../../../components/subprojects/SubprojectCard"
import Link from "next/link"
import { PlusIcon } from "@heroicons/react/24/solid"

export default function Home() {
  const router = useRouter()
  const current_path = `/projects/${router.query.id}/subprojects`
  const [subprojects, isLoading, error] = useMockFetch({
    url: current_path,
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
        <title>Subprojects - ZmartBuild</title>
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
          <main className="flex flex-col content-center">
            {isLoading && !error && (
              <div className="grid h-screen place-items-center">
                <PageSpinner />
              </div>
            )}

            {!isLoading && error && <div>{JSON.stringify(error)}</div>}
            <div className="flex justify-center items-center my-3 md:my-5"></div>

            {subprojects && (
              <>
                <div className="flex-col items-center text-center my-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">ORGANIZATION</h1>
                </div>
                <div className="w-full grid grid-col-1 justify-items-center ">
                  <div className="px-5 md:w-1/2">
                    <div className="flex flex-col md:flex-row md:justify-between items-center pb-4">
                      <p className="text-xl md:text-xl lg:text-2xl font-normal pb-2 pl-1">
                        Subprojects
                      </p>
                      <Link href={`/projects/${router.query.id}/subprojects/new`}>
                        <a>
                          <div
                            className="flex justify-center items-center gap-2 rounded-md px-2 
                              sm:px-3 py-1.5 disabled:opacity-30 transition-all 
                              duration-150 bg-primary 
                              text-primary-contrast hover:bg-primary-hover
                              text-sm sm:text-base mr-1"
                          >
                            <PlusIcon className="h-3 md:h-6 aspect-square fill-white" />
                            New subproject
                          </div>
                        </a>
                      </Link>
                    </div>
                    <section className="flex justify-center items-center">
                      <div className="inline-flex flex-col items-center gap-4 w-full">
                        {subprojects.map((subproj) => {
                          return (
                            <SubprojectCard
                              key={subproj.id}
                              subproject={subproj}
                              current_path={current_path}
                            />
                          )
                        })}
                      </div>
                    </section>
                  </div>
                </div>
              </>
            )}
          </main>
        </>
      )}
    </>
  )
}

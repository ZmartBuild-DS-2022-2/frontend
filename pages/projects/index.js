import { useMockFetch } from "../../hooks/useFetch"
import Head from "next/head"
import Header from "../../components/header/Header"
import ProjectCard from "../../components/projects/ProjectCard"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import { useRouter } from "next/router"
import PageSpinner from "../../components/PageSpinner"

export default function Home() {
  const [projects, isLoading, error] = useMockFetch({ url: "/projects", method: "get" })
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
        <title>Projects - ZmartBuild</title>
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">My Projects</h1>
            </div>

            {isLoading && !error && (
              <div className="grid h-screen place-items-center">
                <PageSpinner />
              </div>
            )}

            {!isLoading && error && <div>{JSON.stringify(error)}</div>}

            {projects && (
              <section className="grid h-screen place-items-center">
                {projects.map((project) => {
                  return <ProjectCard key={project.id} project={project} />
                })}
              </section>
            )}
          </main>
        </>
      )}
    </>
  )
}

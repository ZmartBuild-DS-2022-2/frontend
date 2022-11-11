import { useMockFetch } from "../hooks/useFetch"
import Head from "next/head"
import Header from "../components/header/Header"
import MyProjects from "../components/MyProjects"

export default function Home() {
  const [projects, isLoading, error] = useMockFetch({ url: "/myprojects", method: "get" })

  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="flex-col items-center text-center my-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">My Projects</h1>
        </div>

        {isLoading && !error && <div>Loading projects</div>}

        {!isLoading && error && <div>{JSON.stringify(error)}</div>}

        {!isLoading && !error && <MyProjects data={projects} />}
      </main>
    </>
  )
}

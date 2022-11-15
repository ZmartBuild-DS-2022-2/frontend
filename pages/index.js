import Head from "next/head"
import Header from "../components/header/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - ZmartBuild</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">ZmartBuild</h1>
        </div>
      </main>
    </>
  )
}

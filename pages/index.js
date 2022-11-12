import Head from "next/head"
import UploadFilesForm from "../components/files/uploadFiles"
import Header from "../components/header/Header"
import Model from "../components/Model"

export default function Home() {
  return (
    <>
      <Head>
        <title>ZmartBuild</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">ZmartBuild</h1>
        </div>
      </main>
      <UploadFilesForm />

      <Model name={"test"} scale={0.5} autoRotate={true} />
    </>
  )
}

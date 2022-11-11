import { useState } from "react"
import { useForm } from "react-hook-form"

import PrimaryButton from "../basics/PrimaryButton"
import { backendFetch } from "../../services"

export default function UploadFilesForm() {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [modelUrl, setModelUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const [isValid, setIsValid] = useState(false)
  const {
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({ mode: "onChange" })

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    setIsValid(chosenFiles.length != 0)
    setUploadedFiles(chosenFiles)
  }
  const onSubmit = async () => {
    try {
      const res = await backendFetch({
        url: "/models/upload_model",
        method: "post",
        data: uploadedFiles,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      setModelUrl(res.data?.gltfFileUrl)
    } catch (err) {
      setErrorMessage(err.response?.data || "Something went wrong")
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  return (
    <section className="grid h-screen place-items-center">
      <form
        className="flex flex-col gap-5 w-72 sm:w-96 sm:border-2 px-5 sm:px-10 py-1 sm:py-10 
        md:rounded-md bg-transparent md:bg-white"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="file"
          name="files"
          id="files"
          multiple="multiple"
          accept=".bin,.gltf"
          onChange={handleFileEvent}
        />
        <div className="uploaded-files-list">
          {uploadedFiles.map((file) => (
            <div key={file.name}>{file.name}</div>
          ))}
        </div>
        <PrimaryButton text="Continue" disabled={!isValid || isSubmitting} />
        <div className="text-center text-red-500">
          <span>{modelUrl}</span>
        </div>
        <div className="text-center text-red-500">
          <span>{errorMessage}</span>
        </div>
      </form>
    </section>
  )
}

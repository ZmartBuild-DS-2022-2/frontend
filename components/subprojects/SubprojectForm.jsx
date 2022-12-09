/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import subprojectFields from "../../constants/forms/subproject"
import PrimaryButton from "../basics/PrimaryButton"
import { backendFetch } from "../../services"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"
import Carousel from "../Carousel"
import ImageWithFallback from "../basics/ImageWithFallBack"

const getinputField = (field, register, uploadedFiles, uploadedGltf, uploadedBin) => {
  if (field.type == "file" && field.name == "images") {
    return (
      <label
        className="flex flex-col rounded-lg border-2 border-dashed w-full h-60 p-5 
        cursor-pointer items-center"
      >
        {!uploadedFiles ? (
          <div className="h-full w-full text-center flex flex-col items-center justify-center">
            <CloudArrowUpIcon className="fill-gray-700 h-16 md:h-24 aspect-square" />
            <p className="text-gray-500">
              Upload a photo from your computer
              <span className="block text-sm text-gray-400">File type: {field.typeFile}</span>
            </p>
          </div>
        ) : (
          <div className="relative h-full w-full">
            <Carousel images={uploadedFiles} />
          </div>
        )}
        <input
          type="file"
          multiple="multiple"
          accept={field.typeFile}
          ref={register}
          className={uploadedFiles ? `block ${field.class}` : `block ${field.class}`}
          {...register(field.name, field.validations)}
        />
      </label>
    )
  } else if (field.type == "file") {
    return (
      <label
        className="flex flex-col rounded-lg border-2 border-dashed w-full h-40 md:h-60 p-5 md:p-10 
        cursor-pointer"
      >
        {(field.name == "gltf_file" && !uploadedGltf) ||
        (field.name == "bin_file" && !uploadedBin) ? (
          <div className="h-full w-full text-center flex flex-col items-center justify-center">
            <CloudArrowUpIcon className="fill-gray-700 h-16 md:h-24 aspect-square" />
            <p className="text-gray-500">
              Upload a photo from your computer
              <span className="block text-sm text-gray-400">File type: {field.typeFile}</span>
            </p>
          </div>
        ) : (
          <div className="relative h-full w-full flex-col">
            <ImageWithFallback
              src={"/fallbackimage.png"}
              layout="fill"
              objectFit="contain"
              alt="projectImg"
            />
            <p className="text-gray-500">{"File uploaded"}</p>
          </div>
        )}
        <input
          type="file"
          className={field.class}
          accept={field.typeFile}
          {...register(field.name, field.validations)}
        />
      </label>
    )
  } else if (field.name == "description") {
    return (
      <textarea
        className={field.class}
        type={field.type}
        placeholder={field.placeholder}
        maxLength={field.maxLength.value}
        {...register(field.name, field.validations)}
      />
    )
  } else {
    return (
      <input
        className={field.class}
        type={field.type}
        placeholder={field.placeholder}
        {...register(field.name, field.validations)}
      />
    )
  }
}

export default function SubprojectForm({ isAddMode = true, projectData = null }) {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState(null)
  const [uploadedFiles, setUploadedFiles] = useState(null)
  const [uploadedGltf, setUploadedGltf] = useState(null)
  const [uploadedBin, setUploadedBin] = useState(null)

  const {
    register,
    watch,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
  } = useForm({ mode: "onChange" })

  useEffect(() => {
    watch((value, { name }) => {
      if (isAddMode) {
        if (name == "images") {
          const selectedFiles = Object.values(value[name])
          if (!selectedFiles.length) return setUploadedFiles(false)
          const files = selectedFiles.map((selectedFile) => URL.createObjectURL(selectedFile))
          setUploadedFiles(files)
          return () => files.map((element) => URL.revokeObjectURL(element))
        } else if (name == "gltf_file") {
          const selectedFiles = Object.values(value[name])
          if (!selectedFiles.length) return setUploadedGltf(false)
          const files = selectedFiles.map((selectedFile) => URL.createObjectURL(selectedFile))
          setUploadedGltf(files)
          return () => files.map((element) => URL.revokeObjectURL(element))
        } else if (name == "bin_file") {
          const selectedFiles = Object.values(value[name])
          if (!selectedFiles.length) return setUploadedBin(false)
          const files = selectedFiles.map((selectedFile) => URL.createObjectURL(selectedFile))
          setUploadedBin(files)
          return () => files.map((element) => URL.revokeObjectURL(element))
        }
      }
    })
  }, [watch])

  useEffect(() => {
    if (!isAddMode) {
      subprojectFields.forEach((field) => {
        setValue(field.name, projectData[field.name])
      })
    }
  }, [])

  const onSubmit = async ({ title, description, images, gltf_file, bin_file }) => {
    let formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    if (isAddMode) {
      Array.from(images).forEach((image) => {
        formData.append("images", image)
      })
      Array.from(gltf_file).forEach((file) => {
        formData.append("gltf_file", file)
      })
      Array.from(bin_file).forEach((file) => {
        formData.append("bin_file", file)
      })
    }
    const fetchParams = {
      url: `/subprojects/${isAddMode ? router.query.id : router.query.idSubProject}`,
      method: "post",
      data: formData,
    }
    try {
      if (!isAddMode) fetchParams.method = "patch"
      const res = await backendFetch(fetchParams)
      router.push({ pathname: `/projects/${router.query.id}/subprojects/${res.id}` })
    } catch (err) {
      setErrorMessage(err.response?.data || "Something went wrong")
      return setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  return (
    <div className="grid place-items-center pb-4">
      <form
        className="flex flex-col gap-5 w-11/12 sm:w-96 sm:border-2 px-5 sm:px-10 py-1 sm:py-10 
        md:rounded-md bg-transparent md:bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-center">
          <h1 className="font-bold text-2xl md:text-3xl text-primary-neutral">
            {isAddMode ? "Create" : "Update"} Subproject
          </h1>
        </div>

        {subprojectFields.map((field) => {
          if (isAddMode || (!isAddMode && field.type != "file"))
            return (
              <div
                key={field.name}
                className="relative border-b-2 mb-1 py-1 focus-within:border-gray-400"
              >
                <label className="inline-block font-semibold mb-2 text-base" htmlFor={field.name}>
                  {field.title}
                </label>
                {getinputField(field, register, uploadedFiles, uploadedGltf, uploadedBin)}
                <span className="text-sm text-red-500">{errors[field.name]?.message}</span>
              </div>
            )
        })}

        <PrimaryButton
          className="bg-primary text-primary-contrast hover:bg-primary-hover"
          disabled={!isValid || isSubmitting}
        >
          {isAddMode ? "Create subproject" : "Update"}
        </PrimaryButton>

        <div className="text-center text-red-500">
          <span>{errorMessage}</span>
        </div>
      </form>
    </div>
  )
}

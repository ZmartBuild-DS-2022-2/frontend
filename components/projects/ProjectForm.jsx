/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"
import projectFields from "../../constants/forms/project"
import PrimaryButton from "../basics/PrimaryButton"
import { backendFetch } from "../../services"
import Carousel from "../Carousel"

const getinputField = (field, register, uploadedFiles) => {
  if (field.type == "file") {
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
          className={uploadedFiles ? `block ${field.class}` : "hidden"}
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

export default function ProjectForm({ isAddMode = true, projectData = null }) {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState(null)
  const [uploadedFiles, setUploadedFiles] = useState(null)

  const {
    register,
    watch,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
  } = useForm({ mode: "onChange" })

  useEffect(() => {
    watch((value, { name }) => {
      if (name == "images" && isAddMode) {
        const selectedFiles = Object.values(value[name])
        if (!selectedFiles.length) return setUploadedFiles(false)
        const files = selectedFiles.map((selectedFile) => URL.createObjectURL(selectedFile))
        setUploadedFiles(files)
        return () => files.map((element) => URL.revokeObjectURL(element))
      }
    })
  }, [watch])

  useEffect(() => {
    if (!isAddMode) {
      projectFields.forEach((field) => {
        setValue(field.name, projectData[field.name])
      })
    }
  }, [])

  const onSubmit = async ({ name, description, images }) => {
    let formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    if (isAddMode) {
      Array.from(images).forEach((image) => {
        formData.append("images", image)
      })
    }
    const fetchParams = {
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    try {
      if (isAddMode) {
        fetchParams.method = "post"
        fetchParams.url = `/projects/${router.query.id}`
      } else {
        fetchParams.method = "patch"
        fetchParams.url = `/projects/${projectData.id}`
      }
      const res = await backendFetch(fetchParams)
      router.push(`/projects/${res.id}`)
    } catch (err) {
      setErrorMessage(err.response?.data || "Something went wrong")
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  return (
    <div className="grid place-items-center pb-4">
      <form
        className="flex flex-col gap-5 w-11/12 sm:w-96 sm:border-2 px-5 sm:px-10 py-1 sm:py-10 
        md:rounded-md bg-transparent md:bg-white"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="text-center">
          <h1 className="font-bold text-2xl md:text-3xl text-primary-neutral">
            {isAddMode ? "Create" : "Update"} Project
          </h1>
        </div>

        {projectFields.map((field) => {
          if (isAddMode || (!isAddMode && field.type != "file"))
            return (
              <div
                key={field.name}
                className="relative border-b-2 mb-1 py-1 focus-within:border-gray-400"
              >
                <label className="inline-block font-semibold mb-2 text-base" htmlFor={field.name}>
                  {field.title}
                </label>
                {getinputField(field, register, uploadedFiles)}
                <span className="text-sm text-red-500">{errors[field.name]?.message}</span>
              </div>
            )
        })}

        <PrimaryButton
          className="bg-primary text-primary-contrast hover:bg-primary-hover"
          disabled={!isValid || isSubmitting}
        >
          {isAddMode ? "Create project" : "Update"}
        </PrimaryButton>

        <div className="text-center text-red-500">
          <span>{errorMessage}</span>
        </div>
      </form>
    </div>
  )
}

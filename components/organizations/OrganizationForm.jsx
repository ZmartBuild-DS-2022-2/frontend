/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import organizationFields from "../../constants/forms/organization"
import PrimaryButton from "../basics/PrimaryButton"
import { backendFetch } from "../../services"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"
import ImageWithFallback from "../basics/ImageWithFallBack"

const getinputField = (field, register, uploadedFile) => {
  if (field.type == "file") {
    return (
      <label
        className="flex flex-col rounded-lg border-2 border-dashed w-full h-40 md:h-60 p-5 md:p-10 
        cursor-pointer"
      >
        {!uploadedFile ? (
          <div className="h-full w-full text-center flex flex-col items-center justify-center">
            <CloudArrowUpIcon className="fill-gray-700 h-16 md:h-24 aspect-square" />
            <p className="text-gray-500">
              Upload a photo from your computer
              <span className="block text-sm text-gray-400">File type: {field.typeFile}</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col m-auto relative h-full  w-full">
            <div className="h-4/5 w-full relative">
              <ImageWithFallback
                src={uploadedFile.file}
                alt={"uploaded img"}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="">
              <p>{uploadedFile.name}</p>
            </div>
          </div>
        )}
        <input
          type="file"
          accept={field.typeFile}
          ref={register}
          className={field.class}
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

export default function OrganizationForm({ isAddMode = true, organizationData = null }) {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState(null)
  const [uploadedFile, setUploadedFile] = useState(null)

  const {
    register,
    watch,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
  } = useForm({ mode: "onChange" })

  useEffect(() => {
    watch((value, { name }) => {
      if (name == "file" && isAddMode) {
        const selectedFile = value[name][0]
        if (!selectedFile) return setUploadedFile(false)
        const objectUrl = URL.createObjectURL(selectedFile)
        setUploadedFile({ file: objectUrl, name: selectedFile.name })
        return () => URL.revokeObjectURL(objectUrl)
      }
    })
  }, [watch])

  useEffect(() => {
    if (!isAddMode) {
      organizationFields.forEach((field) => {
        setValue(field.name, organizationData[field.name])
      })
    }
  }, [])

  const onSubmit = async ({ name, email, description, websiteUrl, file }) => {
    let image = null
    if (isAddMode) image = file[0]
    try {
      const fetchParams = {
        url: "/organizations",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: { name, email, description, websiteUrl, image },
      }

      if (isAddMode) {
        fetchParams.method = "post"
      } else {
        fetchParams.method = "patch"
        fetchParams.url = `/organizations/${organizationData.id}`
      }
      const res = await backendFetch(fetchParams)
      router.push({ pathname: `/organizations/${res.id}` })
    } catch (err) {
      setErrorMessage(err.response?.data || "Something went wrong")
      return setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  const onDelete = async () => {
    const fetchParams = {
      url: `/organizations/${organizationData.id}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "delete",
    }

    try {
      await backendFetch(fetchParams)
      router.push({ pathname: `/organizations/` })
    } catch (err) {
      setErrorMessage(err.response?.data || "Something went wrong")
      return setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  return (
    <div className="grid place-items-center pb-4">
      <form
        className="flex flex-col gap-5 w-11/12 sm:w-96 px-5 sm:px-10 sm:py-10 
        md:rounded-md bg-transparent md:bg-white"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="text-center">
          <h1 className="font-bold text-2xl md:text-3xl text-primary-neutral">
            {isAddMode ? "Create" : "Update"} Organization
          </h1>
        </div>

        {organizationFields.map((field) => {
          if (isAddMode || (!isAddMode && field.type != "file"))
            return (
              <div
                key={field.name}
                className="relative border-b-2 mb-1 py-1 focus-within:border-gray-400"
              >
                <label className="inline-block font-semibold mb-2 text-base" htmlFor={field.name}>
                  {field.title}
                </label>
                {getinputField(field, register, uploadedFile)}
                <span className="text-sm text-red-500">{errors[field.name]?.message}</span>
              </div>
            )
        })}

        <PrimaryButton
          className="bg-primary text-primary-contrast hover:bg-primary-hover"
          disabled={!isValid || isSubmitting}
        >
          {isAddMode ? "Create" : "Update"}
        </PrimaryButton>
      </form>

      {!isAddMode ? (
        <form
          className="flex flex-col gap-5 w-11/12 sm:w-96 px-5 sm:px-10 
            md:rounded-md bg-transparent md:bg-white"
          onSubmit={handleSubmit(onDelete)}
        >
          <PrimaryButton
            className="bg-primary text-primary-contrast hover:bg-primary-hover"
            disabled={isSubmitting}
          >
            Delete Organization
          </PrimaryButton>
        </form>
      ) : null}

      <div className="text-center text-red-500">
        <span>{errorMessage}</span>
      </div>
    </div>
  )
}

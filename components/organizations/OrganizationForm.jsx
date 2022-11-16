import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import organizationFields from "../../constants/forms/organization"
import PrimaryButton from "../basics/PrimaryButton"
import { backendFetch } from "../../services"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"

const getinputField = (field, register) => {
  if (field.type == "file") {
    return (
      <label
        className="flex flex-col rounded-lg border-2 border-dashed w-full h-40 md:h-60 p-5 md:p-10 
        cursor-pointer"
      >
        <div className="h-full w-full text-center flex flex-col items-center justify-center">
          <CloudArrowUpIcon className="fill-gray-700 h-16 md:h-24 aspect-square" />
          <p className="text-gray-500">
            Upload a photo from your computer
            <span className="block text-sm text-gray-400">File type: {field.typeFile}</span>
          </p>
        </div>
        <input type="file" className={field.class} {...register(field.name, field.validations)} />
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

export default function OrganizationForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState(null)

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
  } = useForm({ mode: "onChange" })

  const onSubmit = async ({ name, email, description, websiteUrl, image }) => {
    try {
      await backendFetch({
        url: "/organizations",
        method: "post",
        data: { name, email, description, websiteUrl, image },
      })
      router.push({ pathname: "/organizations" })
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
          <h1 className="font-bold text-2xl md:text-3xl text-primary-neutral">New Organization</h1>
        </div>

        {organizationFields.map((field) => {
          return (
            <div
              key={field.name}
              className="relative border-b-2 mb-1 py-1 focus-within:border-gray-400"
            >
              <label className="inline-block font-semibold mb-2 text-base" htmlFor={field.name}>
                {field.title}
              </label>
              {getinputField(field, register)}
              <span className="text-sm text-red-500">{errors[field.name]?.message}</span>
            </div>
          )
        })}

        <PrimaryButton
          className="bg-primary text-primary-contrast hover:bg-primary-hover"
          disabled={!isValid || isSubmitting}
        >
          Create organization
        </PrimaryButton>

        <div className="text-center text-red-500">
          <span>{errorMessage}</span>
        </div>
      </form>
    </div>
  )
}

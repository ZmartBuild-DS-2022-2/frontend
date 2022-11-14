import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { backendFetch } from "../services"
import projectFields from "../constants/forms/project"
import PrimaryButton from "./basics/PrimaryButton"
import Image from "next/image"

function inputField(field, register) {
  if (field.type == "file") {
    return (
      <label
        className="flex flex-col rounded-lg border-4 
                           border-dashed w-full h-60 p-10 group text-center"
      >
        <div
          className="h-full w-full text-center flex flex-col 
                                items-center justify-center"
        >
          <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
            <Image
              src="/LogoZmartBuild.png"
              objectFit="contain"
              alt="ZmartBuild logo"
              height={200}
              width={250}
            />
          </div>
          <p className="pointer-none text-gray-500 ">
            <span className="text-sm">Drag and drop</span> files here <br />
            or select a file from your computer <br />
            <span className="text-sm text-gray-400">File type: {field.typeFile}</span>
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

export default function ProjectForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState(null)

  const {
    register,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm({ mode: "onChange" })

  const onSubmit = async ({ name, description, location, file }) => {
    try {
      await backendFetch({
        url: "/newproject",
        method: "post",
        data: { name, description, location, file },
      })
      router.push({pathname: "/projects"})
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-center">
          <h1 className="font-bold text-3xl text-primary-neutral">New Project</h1>
        </div>

        {projectFields.map((field) => {
          return (
            <div key={field.name} className="relative border-b-2 focus-within:border-gray-400">
              <label className="font-bold mb-2 block text-sm text-red-500" htmlFor={field.name}>
                {field.title}
              </label>
              {inputField(field, register)}
            </div>
          )
        })}

        <PrimaryButton
          className="bg-primary text-primary-contrast hover:bg-primary-hover"
          disabled={!isValid || isSubmitting}
        >
          Create project
        </PrimaryButton>

        <div className="text-center text-red-500">
          <span>{errorMessage}</span>
        </div>
      </form>
    </section>
  )
}

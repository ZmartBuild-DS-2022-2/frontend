import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import AuthContext from "../stores/AuthContext"
import loginFields from "../constants/forms/login"
import PrimaryButton from "./basics/PrimaryButton"
import PrimaryLink from "./basics/PrimaryLink"
import SecondaryLink from "./basics/SecondaryLink"
import Image from "next/image"
import Link from "next/link"

export default function LoginForm() {
  const { login } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState(null)
  const {
    register,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm({ mode: "onChange" })

  const onSubmit = async ({ email, password }) => {
    try {
      await login({ email, password })
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
        <div className="relative h-[170px] sm:h-[200px] md:h-[230px] lg:h-[260px]">
          <Link href="/">
            <a>
              <Image
                src="/LogoZmartBuild.png"
                layout="fill"
                objectFit="contain"
                alt="ZmartBuild logo"
              />
            </a>
          </Link>
        </div>

        <div className="text-center">
          <h1 className="font-bold text-3xl text-primary-neutral">Sign In</h1>
          <p className="text-primary-neutral">Enter your credentials</p>
        </div>

        {loginFields.map((field) => {
          return (
            <div
              key={field.name}
              className="flex rounded px-2 py-1 border focus-within:border-gray-400"
            >
              {field.icon}
              <input
                className="border-none outline-none pl-3 w-full"
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name, field.validations)}
              />
            </div>
          )
        })}

        <div className="flex justify-between items-center">
          <PrimaryLink linkTo="/register">Register</PrimaryLink>
          <PrimaryButton
            className="bg-primary text-primary-contrast hover:bg-primary-hover"
            disabled={!isValid || isSubmitting}
          >
            Continue
          </PrimaryButton>
        </div>

        <div className="text-center text-red-500">
          <span>{errorMessage}</span>
        </div>

        <div className="text-center">
          <SecondaryLink text="Forgot your account?" linkTo="/" />
        </div>
      </form>
    </section>
  )
}

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { backendFetch } from "../services"
import registerFields from "../constants/forms/register"
import PrimaryButton from "./basics/PrimaryButton"
import SecondaryLink from "./basics/SecondaryLink"
import Image from "next/image"
import Link from "next/link"
import LogoZmartBuild from "../public/LogoZmartBuild.png"

export default function RegisterForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState(null)

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    watch,
    handleSubmit,
  } = useForm({ mode: "onChange" })

  const onSubmit = async ({ email, fullname, password }) => {
    try {
      await backendFetch({
        url: "/auth/register",
        method: "post",
        data: { email, fullname, password },
      })
      router.push({ pathname: "/login" })
    } catch (err) {
      setErrorMessage(err.response?.data || "Something went wrong")
      return setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  return (
    <>
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
                  src={LogoZmartBuild}
                  layout="fill"
                  objectFit="contain"
                  alt="ZmartBuild logo"
                />
              </a>
            </Link>
          </div>

          <div>
            <div className="text-center">
              <h1 className="font-bold text-3xl text-primary-neutral">Sign Up</h1>
              <p className="text-primary-neutral">Enter your credentials</p>
            </div>
          </div>

          {registerFields.map((field) => {
            // Adds password watcher for password confirmation field
            if (field.name === "passwordConfirmation") {
              field.validations = {
                validate: {
                  match: (value) => value === watch("password") || "Passwords don't match",
                },
              }
            }

            return (
              <div key={field.name}>
                <div className="flex rounded px-2 py-1 border focus-within:border-gray-400">
                  {field.icon}
                  <input
                    className="border-none outline-none pl-3 w-full"
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.name, field.validations)}
                  />
                </div>
                <span className="text-sm text-red-500">{errors[field.name]?.message}</span>
              </div>
            )
          })}

          <PrimaryButton
            className="bg-primary text-primary-contrast enabled:hover:bg-primary-hover"
            disabled={!isValid || isSubmitting}
          >
            Continue
          </PrimaryButton>

          <div className="text-center text-red-500">
            <span>{errorMessage}</span>
          </div>

          <div className="text-center">
            <SecondaryLink text="Have an account already?" linkTo="/login" />
          </div>
        </form>
      </section>
    </>
  )
}

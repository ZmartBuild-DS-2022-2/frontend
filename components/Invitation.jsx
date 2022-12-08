import Image from "next/image"
import PrimaryButton from "./basics/PrimaryButton"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { backendFetch } from "../services"

export default function Invitation({ data, type }) {
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({ mode: "onChange" })

  const onSubmitAccept = async ({ invitationId }) => {
    try {
      await backendFetch({
        url: `/invitations/${invitationId}`,
        method: "patch",
        data: { id: invitationId, accessType: data.accessType, state: "Accepted" },
      })
    } catch (err) {
      console.log(err)
    }
  }

  const onSubmitDecline = async ({ invitationId }) => {
    try {
      await backendFetch({
        url: `/invitations/${invitationId}`,
        method: "patch",
        data: { id: invitationId, accessType: data.accessType, state: "Declined" },
      })
    } catch (err) {
      console.log(err)
    }
  }

  // Date Format US
  const date = `${data.createdAt.slice(0, 10)}`
  const name = data.type == "project" ? data.project.name : data.organization.name

  return (
    <div
      className="flex overflow-auto justify-between px-2 sm:px-5 py-3 border rounded-md gap-x-3 
      max-w-3xl w-full text-sm sm:text-base"
    >
      <div
        className="flex justify-center items-center relative h-[70px] lg:h-[80px] aspect-square 
        border border-gray-200 rounded-full self-center"
      >
        <Image
          src={"/LogoZmartBuild.png"}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="projectImg"
        />
      </div>

      <div className="grow">
        <h1>You were invited to join to the following {type}:</h1>
        <h1>
          <Link href="">
            <a className="font-semibold text-gray-700">{` ${name}`}</a>
          </Link>{" "}
        </h1>

        <div className="flex flex-row place-content-between">
          <h3 className="text-xs sm:text-sm italic text-gray-600">Sent on {date} </h3>
          <h3 className="text-xs sm:text-sm italic text-gray-600">
            {data.type == "project" ? `Access: ${data.accessType}` : ""}
          </h3>
        </div>
      </div>

      <div className="inline-flex flex-col gap-1 md:gap-2 justify-center">
        <form onSubmit={handleSubmit(onSubmitAccept)} encType="multipart/form-data">
          <input {...register("invitationId")} value={data.id} type="hidden" />
          <PrimaryButton
            className="bg-primary text-primary-contrast hover:bg-primary-hover"
            disabled={isSubmitting}
          >
            Accept
          </PrimaryButton>
        </form>
        <form onSubmit={handleSubmit(onSubmitDecline)} encType="multipart/form-data">
          <input {...register("invitationId")} value={data.id} type="hidden" />
          <PrimaryButton
            className="text-border-gray-400 border border-gray-400 
            hover:text-primary-neutral-hover hover:border-primary-neutral-hover"
            disabled={isSubmitting}
          >
            Decline
          </PrimaryButton>
        </form>
      </div>
    </div>
  )
}

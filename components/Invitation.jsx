import Image from "next/image"
import PrimaryButton from "./basics/PrimaryButton"
import Link from "next/link"

export default function Invitation({ data }) {
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
        <h1>
          You were invited to join to the
          <Link href="">
            <a className="font-semibold text-gray-700">{` ${data.name}`}</a>
          </Link>{" "}
          organization
        </h1>

        <h3 className="text-xs sm:text-sm italic text-gray-600">Sent on {data.createdAt}</h3>
      </div>

      <div className="inline-flex flex-col gap-1 md:gap-2 justify-center">
        <PrimaryButton className="bg-primary text-primary-contrast hover:bg-primary-hover">
          Accept
        </PrimaryButton>
        <PrimaryButton
          className="text-border-gray-400 border border-gray-400 
          hover:text-primary-neutral-hover hover:border-primary-neutral-hover"
        >
          Decline
        </PrimaryButton>
      </div>
    </div>
  )
}

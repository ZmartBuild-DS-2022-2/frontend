import Image from "next/image"
import PrimaryButton from "./basics/PrimaryButton"

export default function Invitation({ data }) {
  return (
    <div key={data.id} className="flex rounded w-1/2 h-1/2 border focus-within:border-gray-400">
      <div className="relative max-h-fit aspect-square rounded-full ml-4 flex items-center">
        <Image
          src={"/LogoZmartBuild.png"}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="projectImg"
        />
      </div>

      <div className="flex flex-row w-full">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row">
            <p className="ml-4">From:</p>
            <p className="ml-1 font-bold">{data.organization}</p>
          </div>
          <p className="ml-4">{data.name}</p>
        </div>

        <div className="flex flex-col justify-center items-end space-y-2 w-full mx-4">
          <PrimaryButton text="Accept" />
          <PrimaryButton text="Reject" />
        </div>
      </div>
    </div>
  )
}

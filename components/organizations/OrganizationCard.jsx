import Image from "next/image"
import Link from "next/link"

export default function OrganizationCard({ data }) {
  return (
    <div
      className="flex justify-between px-2 sm:px-5 py-3 border rounded-md gap-x-3 
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
        <Link href={`/organizations/${data.id}`}>
          <a className="font-bold text-gray-700 text-base md:text-xl line-clamp-1 hover:underline">
            {` ${data.name}`}
          </a>
        </Link>

        <p className="line-clamp-3">{data.description}</p>
      </div>
    </div>
  )
}

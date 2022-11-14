/* eslint-disable max-len */
import Image from "next/image"

export default function OrganizationCard({ org }) {
  return (
    <a
      className="flex items-center rounded w-4/5 py-4 md:w-1/2 h-1/2 border focus-within:border-gray-400 hover:shadow-md"
      href={`/organizations/${org.id}`}
    >
      <div className="relative h-3/5 md:h-full aspect-square rounded-full ml-4 flex items-center">
        <Image
          src={org.imgUrl}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="orgImg"
        />
      </div>
      <div className="grow ml-4 text-lg font-semibold">{org.name}</div>
    </a>
  )
}

import Link from "next/link"
import ImageWithFallback from "../basics/ImageWithFallBack"

export default function ProjectCard({ data }) {
  return (
    <div className="flex gap-4 box-border w-full h-20 align-middle border p-2">
      <div
        className="relative box-border h-full aspect-square rounded-md flex items-center border
      bg-[#fbfbfb]"
      >
        <ImageWithFallback
          src={data.projectImages.length > 0 ? data.projectImages[0]?.url : ""}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="projectImg"
        />
      </div>

      <div className="grow flex items-start">
        <Link href={`/projects/${data?.id}`}>
          <a className="text-base lg:text-md hover:underline font-medium">{data?.name}</a>
        </Link>
      </div>
    </div>
  )
}

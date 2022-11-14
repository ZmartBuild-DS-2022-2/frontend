import Image from "next/image"

export default function ProjectCard({ project }) {
  return (
    // eslint-disable-next-line max-len
    <a
      className="flex rounded w-1/2 h-1/2 border focus-within:border-gray-400"
      href={`/projects/${project.id}`}
    >
      <div className="relative max-h-fit aspect-square rounded-full ml-4 flex items-center">
        <Image
          src={"/LogoZmartBuild.png"}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="projectImg"
        />
      </div>
      <div className="flex items-center justify-center">
        <p className="ml-4">{project.name}</p>
      </div>
    </a>
  )
}

import { Collapse } from "@nextui-org/react"
import { LinkIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import ImageWithFallback from "../basics/ImageWithFallBack"
import ProjectCard from "../projects/ProjectCard"

export default function OrganizationInfo({ data }) {
  return (
    <div className="">
      <div className="flex justify-center gap-5">
        <div
          className="flex justify-center items-center relative lg:h-60 aspect-square 
          border border-gray-200 rounded-lg self-center bg-[#fbfbfb]"
        >
          <ImageWithFallback
            src={data.imgUrl ? data.imgUrl : "/fallbackimage.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="projectImg"
          />
        </div>

        <div className="flex flex-col grow justify-around">
          <div>
            <h1 className="text-left text-2xl md:text-3xl font-semibold mb-2 text-primary-neutral">
              {data?.name}
            </h1>
            <p className="text-sm sm:text-base lg:line-clamp-5 text-gray-700">
              {data?.description}
            </p>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="flex items-center gap-1 text-sm sm:text-base">
              <EnvelopeIcon className="h-5 aspect-square fill-gray-700" />
              <a
                target="_blank"
                href={`mailto:${data?.email}`}
                rel="noopener noreferrer"
                className="hover:underline text-gray-700"
              >
                {data?.email}
              </a>
            </div>

            <div className="flex items-center gap-1 text-sm sm:text-base">
              <LinkIcon className="h-5 aspect-square fill-gray-700" />
              <a
                target="_blank"
                href={data?.websiteUrl}
                rel="noopener noreferrer"
                className="hover:underline text-gray-700"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <Collapse.Group>
        <Collapse title="Projects" className="text-xl font-semibold" expanded>
          <div className="flex flex-col gap-4">
            {/* This should be deleted when the Projects model is done */}
            {(data.projects = [])}
            {data.projects.map((project) => {
              return <ProjectCard key={project.id} data={project} />
            })}
          </div>
        </Collapse>
      </Collapse.Group>
    </div>
  )
}

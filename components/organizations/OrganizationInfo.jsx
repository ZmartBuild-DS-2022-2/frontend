import { useState } from "react"
import { Collapse } from "@nextui-org/react"
import { LinkIcon, EnvelopeIcon, PlusIcon } from "@heroicons/react/24/solid"
import { UserPlusIcon } from "@heroicons/react/24/outline"
import ImageWithFallback from "../basics/ImageWithFallBack"
import ProjectCard from "../projects/ProjectCard"
import Link from "next/link"
import { useFetch } from "../../hooks/useFetch"
import PageSpinner from "../PageSpinner"
import InvitationForm from "../shared/InvitationForm"
import { useRouter } from "next/router"

export default function OrganizationInfo({ organizationData, isAdmin = false, isWritter = false }) {
  const { asPath } = useRouter()
  const [projectsData, isLoadingProjects, projectError] = useFetch({
    url: `/organizations/${organizationData.id}/projects`,
    method: "get",
  })
  const [openAddPeople, setOpenAddPeople] = useState(false)

  const closeHandler = () => setOpenAddPeople(false)

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 w-80 md:w-auto">
        <div
          className="flex justify-center items-center relative lg:h-60 aspect-square 
          border border-gray-200 rounded-lg bg-[#fbfbfb]"
        >
          <ImageWithFallback
            src={organizationData.imgUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="projectImg"
          />
        </div>

        <div className="flex flex-col grow justify-around">
          <div>
            <div className="flex items-center gap-x-2 md:flex-col md:items-start">
              <h1
                className="text-left text-2xl md:text-3xl
                font-semibold mb-2 text-primary-neutral"
              >
                {organizationData?.name}
              </h1>
              {(isAdmin || isWritter) && (
                <Link href={`${asPath}/edit`}>
                  <a
                    className=" text-primary-neutral 
                        hover:text-primary-neutral-hover 
                        font-semibold text-xs md:pb-1"
                  >
                    Edit Organization
                  </a>
                </Link>
              )}
            </div>
            <p className="text-sm sm:text-base lg:line-clamp-5 text-gray-700">
              {organizationData?.description}
            </p>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="flex items-center gap-1 text-sm sm:text-base">
              <EnvelopeIcon className="h-5 aspect-square fill-gray-700" />
              <a
                target="_blank"
                href={`mailto:${organizationData?.email}`}
                rel="noopener noreferrer"
                className="hover:underline text-gray-700"
              >
                {organizationData?.email}
              </a>
            </div>

            <div className="flex items-center gap-1 text-sm sm:text-base">
              <LinkIcon className="h-5 aspect-square fill-gray-700" />
              <a
                target="_blank"
                href={organizationData?.websiteUrl}
                rel="noopener noreferrer"
                className="hover:underline text-gray-700"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-3 md:my-5 gap-x-1">
        {(isWritter || isAdmin) && (
          <Link href={`/organizations/${organizationData?.id}/newproject`}>
            <a>
              <div
                className="flex justify-center items-center gap-2 rounded-md px-2 
                  sm:px-4 py-1.5 disabled:opacity-30 transition-all duration-150 bg-primary 
                  text-primary-contrast hover:bg-primary-hover text-xs sm:text-base"
              >
                <PlusIcon className="h-5 md:h-6 aspect-square fill-white" /> Create Project
              </div>
            </a>
          </Link>
        )}
        {isAdmin && (
          <button type="button" onClick={() => setOpenAddPeople(true)}>
            <a>
              <div
                className="flex justify-center items-center gap-2 rounded-md px-2 
                  sm:px-4 py-1.5 disabled:opacity-30 transition-all duration-150 
                  bg-primary-neutral-hover 
                  text-primary-contrast hover:bg-primary-neutral text-xs sm:text-base"
              >
                Add collaborators <UserPlusIcon className="h-5 md:h-6 aspect-square" />
              </div>
            </a>
          </button>
        )}
      </div>

      <div>
        <Collapse.Group>
          <Collapse title="Projects" className="text-xl font-semibold">
            <div className="flex flex-col gap-4">
              {isLoadingProjects && !projectError && (
                <div className="grid place-items-center">
                  <PageSpinner />
                </div>
              )}
              {projectsData &&
                projectsData.map((project) => {
                  return <ProjectCard key={project.id} data={project} />
                })}
            </div>
          </Collapse>
        </Collapse.Group>
      </div>
      <InvitationForm
        openAddPeople={openAddPeople}
        closeHandler={closeHandler}
        data={organizationData}
        objectiveId={organizationData.id}
        type="organization"
      />
    </>
  )
}

import { UserPlusIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"
import Carousel from "../Carousel"
import InvitationForm from "../shared/InvitationForm"

export default function ProjectInfo({ data }) {
  const [openAddPeople, setOpenAddPeople] = useState(false)
  const closeHandler = () => setOpenAddPeople(false)

  return (
    <div className="rounded lg:border py-2 px-5 md:py-5 sm:px-8 md:px-9 lg:px-10">
      <div className="w-full text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">{data?.name}</h1>
      </div>
      {data.projectImages.length > 0 && (
        <div
          className="w-full my-2 sm:my-3 md:my-5 box-border relative 
        shadow-md bg-[#fbfbfb] rounded-lg h-52 lg:h-96"
        >
          <Carousel images={data?.projectImages} />
        </div>
      )}
      <div className="text-left">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-1 md:mb-2">Description</h1>
        <p className="text-xs sm:text-base">{data?.description}</p>
      </div>
      <div className="flex justify-between my-3">
        <Link href={`/projects/${data.id}/subprojects`}>
          <a
            className="rounded-md px-2 sm:px-4 py-1.5 disabled:opacity-30 transition-all 
            duration-150 bg-primary text-primary-contrast hover:bg-primary-hover text-xs 
            sm:text-base"
          >
            View subprojects
          </a>
        </Link>
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
      </div>
      <InvitationForm
        openAddPeople={openAddPeople}
        closeHandler={closeHandler}
        data={data}
        label_="project"
      />
    </div>
  )
}

import { useState } from "react"
import { useRouter } from "next/router"
import { UserPlusIcon } from "@heroicons/react/24/outline"
import { PlusIcon } from "@heroicons/react/24/solid"
import SubprojectCard from "../subprojects/SubprojectCard"
import { Modal } from "@nextui-org/react"
import Link from "next/link"
import InvitationForm from "../shared/InvitationForm"
import Carousel from "../Carousel"
import PrimaryButton from "../basics/PrimaryButton"

export default function ProjectInfo({ projectData, subprojects, isAdmin, isWritter }) {
  const router = useRouter()
  const { asPath } = useRouter()

  const [openAddPeople, setOpenAddPeople] = useState(false)
  const closeHandler = () => setOpenAddPeople(false)
  const [openImages, setOpenImages] = useState(false)
  const closeHandlerImages = () => setOpenImages(false)

  const current_path = `/projects/${router.query.id}`

  return (
    <>
      <div className="flex flex-col py-4 mx-4 divide-y divide-gray-500/20 md:w-3/5 md:m-auto">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start gap-x-2 md:flex-row md:items-end">
              <h1 className="text-2xl md:text-3xl font-semibold">{projectData?.name}</h1>
              {(isAdmin || isWritter) && (
                <Link href={`${asPath}/edit`}>
                  <a
                    className=" text-primary-neutral 
                      hover:text-primary-neutral-hover 
                      font-semibold text-xs md:pb-1"
                  >
                    Edit Project
                  </a>
                </Link>
              )}
            </div>
            {isAdmin && (
              <button type="button" className="shrink-0" onClick={() => setOpenAddPeople(true)}>
                <a>
                  <div
                    className="flex justify-center items-center gap-2 rounded-md px-2 
                    py-1.5 disabled:opacity-30 transition-all duration-150 
                    bg-primary-neutral-hover
                    text-primary-contrast hover:bg-primary-neutral text-xs sm:text-sm"
                  >
                    <UserPlusIcon className="h-4 md:h-6 aspect-square" /> Add collaborators
                  </div>
                </a>
              </button>
            )}
          </div>
          <div className="pt-1 pb-3">
            {subprojects && (
              <>
                <div className="w-full justify-items-center ">
                  <div className="">
                    <div className="flex justify-between items-center py-2">
                      <p className="text-lg md:text-lg lg:text-2xl pb-2 pl-1">Subprojects</p>
                      {isAdmin || isWritter ? (
                        <Link href={`/projects/${router.query.id}/subprojects/new`}>
                          <a>
                            <div
                              className="flex shrink-0 justify-center items-center 
                                gap-2 rounded-md px-2 
                                py-1.5 disabled:opacity-30 transition-all 
                                duration-150 bg-primary 
                                text-primary-contrast hover:bg-primary-hover
                                text-sm sm:text-base"
                            >
                              <PlusIcon className="h-3 md:h-6 aspect-square fill-white" />
                              New Subproject
                            </div>
                          </a>
                        </Link>
                      ) : null}
                    </div>
                    <section className="flex justify-center items-center">
                      <div className="inline-flex flex-col items-center gap-4 w-full">
                        {subprojects.map((subproj) => {
                          return (
                            <SubprojectCard
                              key={subproj.id}
                              subproject={subproj}
                              current_path={`${current_path}/subprojects`}
                            />
                          )
                        })}
                      </div>
                    </section>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col py-3 items-center md:gap-3">
          <div
            className="rounded md:border focus-within:border-gray-400 px-2 py-2 text-sm 
            sm:text-base"
          >
            <p className="underline decoration-1 underline-offset-2 text-base">
              Project description
            </p>
            {projectData?.description != "" ? (
              projectData?.description
            ) : (
              <p className="text-gray-500">
                Provide a description with an overview of this project...
              </p>
            )}
          </div>

          <PrimaryButton
            onClick={() => setOpenImages(true)}
            type="button"
            className="bg-gray-600 w-2/5 text-primary-contrast drop-shadow-lg text-sm"
          >
            Project Images
          </PrimaryButton>
        </div>
      </div>
      <InvitationForm
        openAddPeople={openAddPeople}
        closeHandler={closeHandler}
        data={projectData}
        objectiveId={router.query.id}
        type="project"
      />
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={openImages}
        onClose={closeHandlerImages}
        width="100vw"
        className="w-[95%]  md:w-3/5 m-auto"
      >
        <Modal.Body>
          <div className="h-[50vh] my-2">
            {projectData?.projectImages.length > 0 ? (
              <Carousel images={projectData?.projectImages} />
            ) : (
              <h1 className="text-2l md:text-3l font-semibold">
                The current project doesn&apos;t have images
              </h1>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

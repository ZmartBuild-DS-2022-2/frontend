import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import PrimaryButton from "../basics/PrimaryButton"
import Carousel from "../Carousel"
import Model from "../Model"

export default function SubprojectInfo({ data, isAdmin = false, isWritter = false }) {
  // We can access what role the user have in the project by the following code:
  // const userRole = data.project.projectUsers[0].projectPermission.role)
  const [showModel, setShowModel] = useState(false)
  const { asPath } = useRouter()

  const handleShowModel = () => {
    setShowModel(true)
  }

  return (
    <div className="rounded lg:border box-border w-full md:py-5 md:px-9 lg:px-10">
      <div className="w-full box-border text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-1 sm:mb-2">
          {data?.title}
        </h1>
        <h3 className="text-xs md:text-sm italic text-gray-600">
          From{" "}
          <Link href={`../../../organizations/${data.project.organization.id}`}>
            <a className="underline md:no-underline hover:underline">
              {data.project.organization.name}
            </a>
          </Link>
        </h3>
      </div>

      {data.subprojectImages.length > 0 && (
        <div
          className="w-full my-2 sm:my-3 md:my-5 box-border relative shadow-md
        bg-[#fbfbfb] rounded-lg h-52 lg:h-96"
        >
          <Carousel images={data?.subprojectImages} />
        </div>
      )}

      <div className="flex justify-between md:flex-col">
        <div className="text-left">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-1 md:mb-2">
            Description
          </h1>
          <p className="text-xs sm:text-base">{data?.description}</p>
        </div>
        {(isAdmin || isWritter) && (
          <div className="self-end justify-self-end md:self-start md:justify-self-start">
            <Link href={`${asPath}/edit`}>
              <a
                className=" text-primary-neutral 
                  hover:text-primary-neutral-hover 
                  font-semibold text-xs md:pb-1"
              >
                Edit Subproject
              </a>
            </Link>
          </div>
        )}
      </div>

      {!showModel && (
        <div className="flex justify-center my-3">
          <PrimaryButton
            className="bg-primary text-primary-contrast hover:bg-primary-hover text-sm 
              md:text-base"
            onClick={handleShowModel}
          >
            Load 3D Model
          </PrimaryButton>
        </div>
      )}

      {showModel && data.gltfmodels[0] && (
        <div className="flex flex-col my-3 w-full box-border items-start">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-1 md:mb-2">3D Model</h1>
          <Model url={data?.gltfmodels[0].url} />
        </div>
      )}
    </div>
  )
}

import { useContext } from "react"
import { useFetch } from "../hooks/useFetch"
import AuthContext from "../stores/AuthContext"
import PageSpinner from "./PageSpinner"
import Image from "next/image"

import userPlaceHolder from "../public/user_placeholder.png"

export default function ProfileCard() {
  
  const { user } = useContext(AuthContext)

  const [organizations, isLoadingOrganizatinos] = useFetch({
    url: "/organizations",
  })
  const [projects, isLoadingProjects] = useFetch({
    url: "/projects",
  })
  const [subprojects, isLoadingSubProjects] = useFetch({
    url: "/subprojects",
  })

  if (isLoadingOrganizatinos || isLoadingProjects || isLoadingSubProjects)
    return (
      <div className="grid h-[70vh] place-items-center">
        <PageSpinner />
      </div>
    )

  return (
    <>
        <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full 
                        mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 flex justify-center">
                        <div className="relative">
                            <Image
                                src={user.imgUrl || userPlaceHolder}
                                layout="fill"
                                objectFit="contain"
                                alt="Profile image"
                                className="shadow-xl rounded-full h-auto align-middle border-none 
                                            absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 text-center mt-20">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide 
                                        text-blueGray-600">
                            {organizations.length}
                        </span>
                        <span className="text-sm text-blueGray-400">Organizations</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide 
                                        text-blueGray-600">
                            {projects.length}
                        </span>
                        <span className="text-sm text-blueGray-400">Projects</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide 
                                        text-blueGray-600">
                            {subprojects.length}
                        </span>
                        <span className="text-sm text-blueGray-400">Subprojects</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <h3 className="text-xl font-semibold leading-normal mb-2 
                                    text-blueGray-700 mb-2">
                        {user.fullname}
                    </h3>
                    <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                        {user.email}
                    </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

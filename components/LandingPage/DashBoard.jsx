/* eslint-disable max-len */
import { useFetch } from "../../hooks/useFetch"
import PageSpinner from "../PageSpinner"
import { Collapse } from "@nextui-org/react"
import SubProjectsCollapse from "./SubProjectsCollapse"
import ProjectsCollapse from "./ProjectsCollapse"
import OrganizationsCollapse from "./OrganizationsCollapse"

export default function DashBoard() {
  const [organizations, isLoadingOrganizations] = useFetch({
    url: "/organizations",
    params: { limit: 3 },
  })
  const [projects, isLoadingProjects] = useFetch({
    url: "/projects",
    params: { limit: 3 },
  })
  const [subprojects, isLoadingSubProjects] = useFetch({
    url: "/subprojects",
    params: { limit: 3 },
  })

  if (isLoadingOrganizations || isLoadingProjects || isLoadingSubProjects)
    return (
      <div className="grid h-[70vh] place-items-center">
        <PageSpinner />
      </div>
    )

  return (
    <div className="flex flex-col md:mx-auto md:w-2/4 md:border md:rounded-md">
      <Collapse.Group>
        <Collapse
          title="Recent subprojects"
          className="text-xl font-semibold"
          expanded={!isLoadingSubProjects}
        >
          <div className="flex flex-col items-center">
            <SubProjectsCollapse
              subprojects={subprojects}
              isLoadingSubProjects={isLoadingSubProjects}
            />
          </div>
        </Collapse>
        <Collapse title="Recent projects" className="text-xl font-semibold">
          <div className="flex justify-center">
            <ProjectsCollapse projects={projects} isLoadingProjects={isLoadingProjects} />
          </div>
        </Collapse>
        <Collapse title="Recent organizations" className="text-xl font-semibold">
          <div className="flex justify-center">
            <OrganizationsCollapse
              organizations={organizations}
              isLoadingOrganizations={isLoadingOrganizations}
            />
          </div>
        </Collapse>
      </Collapse.Group>
    </div>
  )
}

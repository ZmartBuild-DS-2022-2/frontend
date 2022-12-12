import PageSpinner from "../PageSpinner"
import ProjectCard from "../projects/ProjectCard"

export default function ProjectsCollapse({ projects, isLoadingProjects }) {
  if (isLoadingProjects) return <PageSpinner w={6} wsm={5} wlg={5} />

  if (projects?.length == 0)
    return (
      <>
        <p>We couldn&apos;t find any projects. Create one from an organization</p>
      </>
    )

  return (
    <>
      {projects && (
        <div className="inline-flex flex-col items-center gap-4 px-5 w-full ">
          {projects.map((project) => {
            return <ProjectCard key={project.id} data={project} />
          })}
        </div>
      )}
    </>
  )
}

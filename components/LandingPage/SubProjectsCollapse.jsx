import PageSpinner from "../PageSpinner"
import SubprojectCard from "../subprojects/SubprojectCard"

export default function SubProjectsCollapse({ subprojects, isLoadingSubProjects }) {
  if (isLoadingSubProjects) return <PageSpinner w={6} wsm={5} wlg={5} />

  if (subprojects?.length == 0)
    return (
      <>
        <p>We couldn&apos;t find any subprojects</p>
        <p>Create one from an organization</p>
      </>
    )

  return (
    <>
      {subprojects && (
        <div className="inline-flex flex-col items-center gap-4 px-5 w-full ">
          {subprojects.map((subproject) => {
            return (
              <SubprojectCard
                key={subproject.id}
                subproject={subproject}
                current_path={`/projects/${subproject.project.id}/subprojects`}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

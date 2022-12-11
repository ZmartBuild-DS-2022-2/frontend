import PageSpinner from "../PageSpinner"
import OrganizationCard from "../organizations/OrganizationCard"

export default function OrganizationsCollapse({ organizations, isLoadingOrganizatinos }) {
  if (isLoadingOrganizatinos) return <PageSpinner w={6} wsm={5} wlg={5} />

  if (organizations?.length == 0)
    return (
      <>
        <p className="pb-2">We couldn&apos;t find any organizations</p>
      </>
    )
  return (
    <>
      {organizations && (
        <div className="inline-flex flex-col items-center gap-4 px-5 w-full ">
          {organizations.map((organization) => {
            return <OrganizationCard key={organization.id} data={organization} />
          })}
        </div>
      )}
    </>
  )
}

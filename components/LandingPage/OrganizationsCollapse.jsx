import PageSpinner from "../PageSpinner"
import Link from "next/link"
import { PlusIcon } from "@heroicons/react/24/solid"
import OrganizationCard from "../organizations/OrganizationCard"

export default function OrganizationsCollapse({ organizations, isLoadingOrganizatinos }) {
  if (isLoadingOrganizatinos) return <PageSpinner w={6} wsm={5} wlg={5} />

  if (organizations?.length == 0)
    return (
      <>
        <p className="pb-2">We couldn&apos;t find any organizations</p>
        <Link href="/organizations/new">
          <a>
            <div
              className="flex justify-center items-center gap-2 rounded-md px-2
              sm:px-4 py-1.5 disabled:opacity-30 transition-all duration-150 bg-primary 
              text-primary-contrast hover:bg-primary-hover text-xs sm:text-base"
            >
              <PlusIcon className="h-4 md:h-6 aspect-square fill-white" /> Create one
            </div>
          </a>
        </Link>
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

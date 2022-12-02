import { Collapse } from "@nextui-org/react"
import PageSpinner from "./PageSpinner"
import Invitation from "./Invitation"

export default function CollapseInvitation({ isLoading, error, invitations, type }) {
  return (
    <div>
      <Collapse.Group>
        <Collapse title={type} className="text-xl font-semibold">
          <div className="flex flex-col gap-4">
            {isLoading && !error && (
              <div className="grid place-items-center">
                <PageSpinner />
              </div>
            )}
            {invitations &&
              invitations.map((invitation) => {
                return <Invitation key={invitation.id} data={invitation} type={type} />
              })}
          </div>
        </Collapse>
      </Collapse.Group>
    </div>
  )
}

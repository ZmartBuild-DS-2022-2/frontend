/* eslint-disable max-len */
export const radioButtons = {
  reader: {
    value: "r",
    label: "Reader",
    organization: "Readers can see all projects from the organization",
    project: "Readers can see all subprojects from the project",
  },
  member: {
    value: "w",
    label: "Member",
    organization: "Members can edit the information from the organization and from all projects",
    project: "Members can edit the information from the project and from all subprojects",
  },
  administrator: {
    value: "a",
    label: "Administrator",
    organization:
      "Administrators have full administrative rights to the organization and have complete access to all projects",
    project:
      "Administrators have full administrative rights to the projects and have complete access to all subprojects",
  },
}

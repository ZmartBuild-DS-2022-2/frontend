const OrganizationFields = [
  {
    title: "Organization Name",
    name: "name",
    type: "text",
    placeholder: "My Company S.A.",
    class: "block w-full appearance-none focus:outline-none bg-transparent",
    validations: { required: false },
  },
  {
    title: "Organization email",
    name: "email",
    type: "email",
    placeholder: "contact@company.com",
    class: "block w-full appearance-none focus:outline-none bg-transparent",
    validations: { required: false },
  },
  {
    title: "Description",
    name: "description",
    type: "text",
    placeholder: "What does this organization do?",
    class: "block w-full appearance-none focus:outline-none bg-transparent",
    validations: { required: false },
  },
  {
    title: "Organization web site",
    name: "websiteUrl",
    type: "text",
    placeholder: "mycompany.com",
    class: "block w-full appearance-none focus:outline-none bg-transparent",
    validations: { required: false },
  },
  {
    title: "Organization logo",
    name: "image",
    type: "file",
    placeholder: "Upload File",
    class: "hidden",
    typeFile: ".png, .jpg",
    validations: { required: false },
  },
]

export default OrganizationFields

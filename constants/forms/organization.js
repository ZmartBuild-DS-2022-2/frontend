const OrganizationFields = [
  {
    title: "Organization Name (*)",
    name: "name",
    type: "text",
    placeholder: "My Company S.A.",
    class: "border-none outline-none pl-0 w-full",
    validations: {
      required: { value: true, message: "Organization name can't be empty" },
      pattern: {
        value: /^[a-zA-Z][a-zA-Z0-9 . \- ]{2,25}$/,
        message: "Provide a valid name (min. 2 characters and max. 20)",
      },
    },
  },
  {
    title: "Organization Email",
    name: "email",
    type: "email",
    placeholder: "contact@company.com",
    class: "border-none outline-none pl-0 w-full",
    validations: {
      required: false,
      pattern: {
        value: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,
        message: "Enter a valid email address",
      },
    },
  },
  {
    title: "Description",
    name: "description",
    type: "text",
    placeholder: "What does this organization do?",
    class: "border-none outline-none pl-0 w-full min-h-min",
    maxLength: { value: 300, message: "Maximum of 300 characters" },
    validations: { required: false },
  },
  {
    title: "Organization Web Site",
    name: "websiteUrl",
    type: "text",
    placeholder: "mycompany.com",
    class: "border-none outline-none pl-0 w-full",
    validations: {
      required: false,
      pattern: {
        value:
          /* eslint-disable */
          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        message: "Provide a valid URL",
      },
    },
  },
  {
    title: "Organization Logo",
    name: "file",
    type: "file",
    placeholder: "Upload File",
    class: "hidden",
    typeFile: ".png, .jpg",
    validations: { required: false },
  },
]

export default OrganizationFields

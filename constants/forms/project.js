const projectFields = [
  {
    title: "Project Name",
    name: "name",
    type: "text",
    placeholder: "Miles Bridge Construction",
    class: "block w-full appearance-none focus:outline-none bg-transparent",
    validations: {
      required: { value: true, message: "Project name can't be empty" },
    },
  },
  {
    title: "Description",
    name: "description",
    type: "text",
    placeholder: "Squared m2, location, etc",
    class: "block w-full appearance-none focus:outline-none bg-transparent",
    maxLength: 250,
    validations: { required: false },
  },
  {
    title: "Project Images",
    name: "images",
    type: "file",
    placeholder: "Upload File",
    class: "hidden",
    typeFile: ".png, .jpg",
    validations: { required: false },
  },
]

export default projectFields

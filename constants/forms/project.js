const projectFields = [
  {
    title: "Project Name",
    name: "name",
    type: "text",
    placeholder: "Miles Bridge Construction",
    class: "block w-full appearance-none focus:outline-none bg-transparent",
    validations: { required: true },
  },
  {
    title: "Description",
    name: "description",
    type: "text",
    placeholder: "Squared m2, location, etc",
    class: "block w-full appearance-none focus:outline-none bg-transparent",
    validations: { required: true },
  },
  {
    title: "Location",
    name: "location",
    type: "text",
    placeholder: "Miami, Florida",
    class: "block w-full appearance-none focus:outline-none bg-transparent",
    validations: { required: true },
  },
  {
    title: "Project Images",
    name: "images",
    type: "file",
    placeholder: "Upload File",
    class: "hidden",
    typeFile: ".png, .jpg",
    validations: { required: true },
  },
]

export default projectFields

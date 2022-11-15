const subprojectFields = [
  {
    title: "Subproject Name",
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
    title: "Subproject Models",
    name: "models",
    type: "file",
    placeholder: "Upload File",
    class: "hidden",
    typeFile: ".gltf, .png, .jpg",
    validations: { required: true },
  },
]

export default subprojectFields

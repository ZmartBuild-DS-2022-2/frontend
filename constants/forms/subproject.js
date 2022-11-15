const subprojectFields = [
  {
    title: "Subproject Name (*)",
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
    maxLength: 300,
    validations: { required: false },
  },
  {
    title: "gltf file",
    name: "gltf_file",
    type: "file",
    placeholder: "Upload File",
    class: "hidden",
    typeFile: ".gltf",
    validations: { required: true },
  },
  {
    title: "bin file",
    name: "bin_file",
    type: "file",
    placeholder: "Upload File",
    class: "hidden",
    typeFile: ".bin",
    validations: { required: true },
  },
  {
    title: "Subproject Images",
    name: "images",
    type: "file",
    placeholder: "Upload File",
    class: "hidden",
    typeFile: ".png, .jpg",
    validations: { required: false },
  },
]

export default subprojectFields

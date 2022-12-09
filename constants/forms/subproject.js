const subprojectFields = [
  {
    title: "Subproject Name (*)",
    name: "title",
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
    validations: { required: false },
  },
  {
    title: "bin file",
    name: "bin_file",
    type: "file",
    placeholder: "Upload File",
    class: "hidden",
    typeFile: ".bin",
    validations: { required: false },
  },
  {
    title: "Subproject Images",
    name: "images",
    type: "file",
    placeholder: "Upload File",
    class: "text-xs py-4 w-fit",
    typeFile: ".png, .jpg",
    validations: { required: false },
  },
]

export default subprojectFields

import Model from "../Model"

export default function SubprojectInfo({ subproject }) {
  return (
    <div className="rounded w-3/4 h-1/2 mx-auto border focus-within:border-gray-400">
      <div className="w-full text-center my-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{subproject.title}</h1>
      </div>

      <div className="text-left mt-20 mx-8">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold">Work Plan Description</h1>
      </div>

      <div className="text-left mt-2 mx-8 text-justify">
        <h1 className="text-1xl md:text-1xl lg:text-1x">{subproject.description}</h1>
      </div>

      <div className="text-left mt-10 mx-8 text-center">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold">Project Models</h1>
      </div>

      <Model name={"test"} scale={0.5} autoRotate={true} />
    </div>
  )
}

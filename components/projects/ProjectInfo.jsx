import Carousel from "../Carousel"
import PrimaryButton from "../basics/PrimaryButton"

export default function ProjectInfo({ project }) {
  return (
    <div className="rounded w-3/4 h-1/2 mx-auto border focus-within:border-gray-400">
      <div className="w-full text-center my-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{project.title}</h1>
      </div>

      <div className="text-left mt-20 mx-8">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold">Work Plan Description</h1>
      </div>

      <div className="text-left mt-2 mx-8 text-justify">
        <h1 className="text-1xl md:text-1xl lg:text-1x">{project.description}</h1>
      </div>

      <div className="text-left mt-4 mx-8">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold">Location</h1>
      </div>

      <div className="flex text-left mt-2 mx-8">
        <h1 className="text-1xl md:text-1xl lg:text-1x font-semibold">Latitude:</h1>
        <h1 className="text-1xl md:text-1xl lg:text-1x ml-2">{project.location.latitude}</h1>
      </div>
      <div className="flex text-left mt-2 mx-8">
        <h1 className="text-1xl md:text-1xl lg:text-1x font-semibold">Longitude:</h1>
        <h1 className="text-1xl md:text-1xl lg:text-1x ml-2">{project.location.longitude}</h1>
      </div>

      <div className="w-full text-center my-8">
        <PrimaryButton className="bg-primary text-primary-contrast hover:bg-primary-hover">
          Sub-Projects
        </PrimaryButton>
      </div>

      <div className="text-left mt-10 mx-8 text-center">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold">Project Images</h1>
      </div>

      <Carousel images={project.images} total={project.images.length} />
    </div>
  )
}

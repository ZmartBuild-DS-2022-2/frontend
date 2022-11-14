import Carousel from "../Carousel"

export default function ProjectInfo({ data }) {
  return (
    <div className="rounded lg:border py-2 px-5 md:py-5 sm:px-8 md:px-9 lg:px-10">
      <div className="w-full text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">{data.title}</h1>
      </div>

      <Carousel images={data.images} />

      <div className="text-left">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-1 md:mb-2">Description</h1>
        <p className="text-xs sm:text-base">{data.description}</p>
      </div>
    </div>
  )
}

import Link from "next/link"
import Carousel from "../Carousel"

export default function ProjectInfo({ data }) {
  return (
    <div className="rounded lg:border py-2 px-5 md:py-5 sm:px-8 md:px-9 lg:px-10">
      <div className="w-full text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">{data.title}</h1>
      </div>


      {data.images.length > 0 && <Carousel images={data.images} />}

      <div className="text-left">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-1 md:mb-2">Description</h1>
        <p className="text-xs sm:text-base">{data.description}</p>
      </div>

      <div className="flex justify-center my-3">
        <Link href="/">
          <a
            className="rounded-md px-2 sm:px-4 py-1.5 disabled:opacity-30 transition-all 
            duration-150 bg-primary text-primary-contrast hover:bg-primary-hover text-xs 
            sm:text-base"
          >
            View subprojects
          </a>
        </Link>
      </div>
    </div>
  )
}

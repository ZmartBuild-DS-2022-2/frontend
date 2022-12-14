import Link from "next/link"
import PrimaryButton from "../basics/PrimaryButton"
import img1 from "../../public/ladingPageImages/1.png"
import img2 from "../../public/ladingPageImages/2.jpeg"
import img3 from "../../public/ladingPageImages/3.jpg"
import Carousel from "../Carousel"

const GetStaterd = ({ className }) => {
  return (
    <Link href="/register">
      <PrimaryButton
        type="button"
        className={`px-8 bg-primary text-primary-contrast hover:bg-primary-hover ${className}`}
      >
        Get Started
      </PrimaryButton>
    </Link>
  )
}

export default function LandingPage() {
  return (
    <div className="flex flex-col p-2 md:py-4 md:px-8">
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-end">
        <div className="flex flex-col items-center p-2 md:w-[35vw]">
          <p className="text-3xl md:text-4xl font-medium">3D Model Visualizer</p>
          <p className="md:text-xl">Upload, share and visualize.</p>
          <p className="md:text-xl">It&apos;s simple.</p>
          <div className="p-4 hidden md:block">
            <GetStaterd className="md:text-lg " />
          </div>
        </div>
        <div className="relative w-[95vw] h-[40vh] md:w-[60vw] md:h-[75vh] md:justify-self-start ">
          <Carousel images={[img1, img2, img3]} className="rounded-xl" objectFit="cover" />
        </div>
        <div className="p-4 md:hidden">
          <GetStaterd />
        </div>
      </div>
    </div>
  )
}

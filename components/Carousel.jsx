import { useState } from "react"
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid"
import ImageWithFallback from "./basics/ImageWithFallBack"

export default function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0)

  const decreaseImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1)
    } else {
      setCurrentImage(currentImage - 1)
    }
  }

  const increaseImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0)
    } else {
      setCurrentImage(currentImage + 1)
    }
  }

  return (
    <>
      <ImageWithFallback
        src={images[currentImage]?.url || images[currentImage]}
        layout="fill"
        objectFit="contain"
        alt="projectImg"
      />

      <div className="absolute left-0 top-0 bottom-0 flex justify-center items-center sm:ml-2">
        <button onClick={decreaseImage} className="w-5 lg:w-10 aspect-square">
          <ArrowLeftCircleIcon className="fill-gray-400 hover:fill-gray-500" />
        </button>
      </div>

      <div className="absolute right-0 top-0 bottom-0 flex justify-center items-center sm:mr-2">
        <button onClick={increaseImage} className="w-5 lg:w-10 aspect-square">
          <ArrowRightCircleIcon className="fill-gray-400 hover:fill-gray-500" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <p className="px-2 rounded-t bg-gray-800 opacity-80 text-white text-xs md:text-base">
          {currentImage + 1}/{images.length}
        </p>
      </div>
    </>
  )
}

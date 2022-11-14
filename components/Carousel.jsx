import { useState } from "react"

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid"

export default function Carousel({ images, total }) {
  const [currentImage, setCurrentImage] = useState(0)

  const changeImage = (newValue) => {
    if (newValue < 0){
      setCurrentImage(total - 1)
    }
    else if (newValue > total - 1){
      setCurrentImage(0)
    }
    else{
      setCurrentImage(newValue)
    }
  }

  return (
    <div className="flex w-full justify-center mb-10">
      <div className="flex w-1/8 justify-center content-center">
        <button
          className="flex justify-center items-center"
          onClick={() => changeImage(currentImage - 1)}
        >
          <ArrowLeftCircleIcon className="w-2/5 h-2/5" />
        </button>
      </div>

      <div className="flex h-auto w-6/8 overflow-hidden rounded-lg md:h-96 mt-10">
        <div className="w-full">
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src={images[currentImage]} className="block w-11/12 h-full mx-auto round" alt="" />
        </div>
      </div>

      <div className="flex w-1/8 justify-center content-center">
        <button
          className="flex justify-center items-center"
          onClick={() => changeImage(currentImage + 1)}
        >
          <ArrowRightCircleIcon className="w-2/5 h-2/5" />
        </button>
      </div>
    </div>
  )
}

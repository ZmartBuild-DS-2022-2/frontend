import React, { useEffect, useState } from "react"
import Image from "next/image"
import fallbackImg from "../../public/fallbackimage.png"

const ImageWithFallback = (props) => {
  const { src, alt, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src ? src : "")

  useEffect(() => {
    if (src) {
      setImgSrc(src)
    } else {
      setImgSrc(fallbackImg)
    }
  }, [src])

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackImg)
      }}
    />
  )
}

export default ImageWithFallback

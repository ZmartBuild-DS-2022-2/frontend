import React, { useEffect, useState } from "react"
import Image from "next/image"

const ImageWithFallback = (props) => {
  const fallbackSrc = "/fallbackimage.png"
  const { src, alt, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src ? src : "")

  useEffect(() => {
    if (src) {
      setImgSrc(src)
    } else {
      setImgSrc(fallbackSrc)
    }
  }, [src])

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default ImageWithFallback

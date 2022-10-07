import Image from "next/image"
import Link from "next/link"
import PrimaryLink from "./basics/PrimaryLink"

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-2 shadow-md mb-5 px-5 lg:px-7 py-3 
      bg-white"
    >
      <div className="relative flex items-center h-[50px] sm:h-[60px] md:h-[65px] lg:h-[70px]">
        <Link href="/">
          <a>
            <Image
              src="/LogoZmartBuildText.png"
              layout="fill"
              objectFit="contain"
              objectPosition="left
              "
              alt="ZmartBuild logo"
            />
          </a>
        </Link>
      </div>

      <div className="flex justify-end items-center sm:text-xl">
        <PrimaryLink text="Sign In" linkTo="/login" />
      </div>
    </header>
  )
}

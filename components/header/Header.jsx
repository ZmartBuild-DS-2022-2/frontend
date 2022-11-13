import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import AuthContext from "../../stores/AuthContext"
import PrimaryLink from "../basics/PrimaryLink"
import HeaderDropdown from "./HeaderDropdown"

export default function Header() {
  const { user } = useContext(AuthContext)

  return (
    <header
      className="w-full sticky top-0 z-50 grid grid-cols-2 shadow-md mb-5 px-5 md:px-7 lg:pr-14 py-3
      bg-white"
    >
      <div className="relative flex items-center h-[50px] lg:h-[55px]">
        <Link href="/">
          <a>
            <Image
              src="/LogoZmartBuildText.png"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt="ZmartBuild logo"
            />
          </a>
        </Link>
      </div>

      <div className="flex justify-end items-center sm:text-md gap-x-5">
        {user ? <HeaderDropdown /> : <PrimaryLink linkTo="/login"> Sign In </PrimaryLink>}
      </div>
    </header>
  )
}

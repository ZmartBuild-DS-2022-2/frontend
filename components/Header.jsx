import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import AuthContext from "../stores/AuthContext"
import PrimaryLink from "./basics/PrimaryLink"

export default function Header() {
  const { user, logout } = useContext(AuthContext)

  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-2 shadow-md mb-5 px-5 lg:px-7 py-3 
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
        {user ? (
          <>
            <button
              className="text-primary-neutral hover:text-primary-neutral-hover"
              onClick={logout}
            >
              Log Out
            </button>
          </>
        ) : (
          <PrimaryLink text="Sign In" linkTo="/login" />
        )}
      </div>
    </header>
  )
}

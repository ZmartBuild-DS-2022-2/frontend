import { useState, useContext, useEffect } from "react"
import AuthContext from "../../stores/AuthContext"
import Image from "next/image"
import Link from "next/link"
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid"

export default function HeaderDropdown() {
  const { user, logout } = useContext(AuthContext)
  const [opened, setOpened] = useState(false)

  const handleDropdownClick = () => {
    setOpened(!opened)
  }

  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpened(false)
    }
  }

  useEffect(() => {
    document.getElementById("header-dropdown")?.focus()
  }, [opened])

  return (
    <div
      className="relative outline-none"
      id="header-dropdown"
      onBlur={handleDropdownBlur}
      tabIndex="1"
    >
      <div className="hidden md:block">
        <div
          className="flex justify-center items-center gap-x-2 cursor-pointer"
          onClick={handleDropdownClick}
        >
          <div className="relative h-[40px] aspect-square rounded-full">
            <Image
              src={user.imgUrl || "/user_placeholder.png"}
              layout="fill"
              objectFit="contain"
              alt="Profile avatar"
              className="rounded-full"
            />
          </div>

          <div className="flex gap-x-1 items-center">
            <p>{user.fullname}</p>
            {opened ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden cursor-pointer" onClick={handleDropdownClick}>
        <Bars3Icon className="h-10 w-10" />
      </div>

      {opened && (
        <div
          className="flex flex-col gap-y-3 w-40 sm:w-52 absolute py-4 px-3 rounded-md shadow-md
          bg-slate-100 right-0 text-primary-neutral"
        >
          <Link href="/organizations">
            <a>
              <div className="flex gap-x-2 items-center transition-transform hover:scale-105">
                <UserGroupIcon className="h-6 w-6" />
                <p>My organizations</p>
              </div>
            </a>
          </Link>

          <Link href="/invitations">
            <a>
              <div className="flex gap-x-2 items-center transition-transform hover:scale-105">
                <EnvelopeIcon className="h-6 w-6" />
                <p>My invitations</p>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a>
              <div className="flex gap-x-2 items-center transition-transform hover:scale-105">
                <UserIcon className="h-6 w-6" />
                <p>Profile</p>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a>
              <div className="flex gap-x-2 items-center transition-transform hover:scale-105">
                <Cog8ToothIcon className="h-6 w-6" />
                <p>Settings</p>
              </div>
            </a>
          </Link>

          <button className="text-left" onClick={logout}>
            <div className="flex gap-x-2 items-center transition-transform hover:scale-105">
              <ArrowRightOnRectangleIcon className="h-6 w-6" />
              <p>Log Out</p>
            </div>
          </button>
        </div>
      )}
    </div>
  )
}

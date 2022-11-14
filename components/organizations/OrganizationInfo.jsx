import Image from "next/image"
import { Collapse } from "@nextui-org/react"
import PrimaryLink from "../basics/PrimaryLink"
import { GlobeAltIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"

export default function OrganizationInfo({ org }) {
  return (
    <div className="rounded w-3/4 h-1/2 mx-auto">
      <div className="flex text-center my-4 items-center">
        <div className="flex relative w-1/5 aspect-square rounded-full ml-4">
          <Image
            src={org.imgUrl}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="orgImg"
          />
        </div>
        <h1 className="ml-2 inline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          {org.name}
        </h1>
      </div>

      <Collapse.Group>
        <Collapse title="Organization details" className="text-lg font-medium" expanded>
          <div className="flex font-normal flex-col space-y-4">
            <div className="inline-flex items-center">
              <ChatBubbleLeftEllipsisIcon className="w-6 h-6 mr-2" />
              <p className="text-ms"> {org.email}</p>
            </div>
            <div className="inline-flex items-center">
              <GlobeAltIcon className="w-6 h-6 mr-2" />
              <PrimaryLink linkTo={org.websiteUrl} className="text-ms font-medium">
                Go to official website
              </PrimaryLink>
            </div>
            <div>
              <label>Description</label>
              <p className="text-xs text-justify">{org.description}</p>
            </div>
          </div>
        </Collapse>
        <Collapse title="Projects" className="text-lg font-medium"></Collapse>
      </Collapse.Group>
    </div>
  )
}

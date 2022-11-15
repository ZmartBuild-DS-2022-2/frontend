import Link from "next/link"

export default function SubprojectCard({ subproject, current_path }) {
  return (
    <div
      className="rounded w-full border focus-within:border-gray-400 px-4 py-2 text-sm 
      sm:text-base flex-1"
    >
      <Link href={`${current_path}/${subproject.id}`}>
        <a className="underline sm:no-underline hover:underline line-clamp-2 md:line-clamp-1 mb-1">
          {subproject.name}
        </a>
      </Link>
      <p className="text-sm font-light line-clamp-2 md:line-clamp-1"> {subproject.description}</p>
    </div>
  )
}

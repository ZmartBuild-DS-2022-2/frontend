import Link from "next/link"

export default function PrimaryLink({ text, linkTo = "/" }) {
  return (
    <Link href={linkTo}>
      <a
        className="text-primary-neutral hover:text-primary-neutral-hover 
        font-semibold"
      >
        {text}
      </a>
    </Link>
  )
}

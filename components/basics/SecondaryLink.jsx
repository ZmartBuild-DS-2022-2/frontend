import Link from "next/link"

export default function SecondaryLink({ text, linkTo = "/" }) {
  return (
    <Link href={linkTo}>
      <a
        className="text-sm text-primary-neutral font-semibold underline 
        underline-offset-2 hover:text-primary-neutral-hover"
      >
        {text}
      </a>
    </Link>
  )
}

import Link from "next/link"

export default function PrimaryLink({ linkTo = "/", ...props }) {
  return (
    <Link href={linkTo}>
      <a
        className="text-primary-neutral hover:text-primary-neutral-hover 
        font-semibold"
      >
        {props.children}
      </a>
    </Link>
  )
}

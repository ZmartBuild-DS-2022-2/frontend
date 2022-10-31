export default function PrimaryButton({ text, ...props }) {
  return (
    <button
      className="rounded-md px-4 py-1.5 bg-primary text-primary-contrast 
    hover:bg-primary-hover disabled:opacity-30 transition-all duration-150"
      {...props}
    >
      {text}
    </button>
  )
}

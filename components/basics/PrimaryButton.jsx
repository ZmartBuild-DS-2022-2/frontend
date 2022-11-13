export default function PrimaryButton({ ...props }) {
  const { className } = props
  return (
    <button
      className={`rounded-md px-4 py-1.5 disabled:opacity-30 transition-all duration-150 
      ${className}`}
    >
      {props.children}
    </button>
  )
}

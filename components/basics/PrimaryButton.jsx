export default function PrimaryButton({ ...props }) {
  const { className, disabled = false, onClick } = props
  return (
    <button
      className={`rounded-md px-1.5 sm:px-4 py-1.5 disabled:opacity-30 transition-all duration-150 
      ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {props.children}
    </button>
  )
}

export default function RadioInput({ register, label, description, value, fieldName, checked }) {
  return (
    <div className="flex">
      <div className="flex items-center h-5">
        <input
          aria-describedby="helper-radio-text"
          checked={checked}
          type="radio"
          value={value}
          {...register(fieldName)}
          className="w-4 h-4 bg-gray-100 border-gray-300
           dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        />
      </div>
      <div className="ml-2 text-sm">
        <label htmlFor="helper-radio" className="font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
        <p className="text-xs font-normal text-gray-500 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

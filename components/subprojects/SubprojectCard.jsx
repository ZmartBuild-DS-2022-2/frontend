import PrimaryButton from "../basics/PrimaryButton"

export default function SubprojectCard({ subproject }) {
  return (
    // eslint-disable-next-line max-len
    <div className="rounded w-full h-1/2 border focus-within:border-gray-400">
      <div className="p-4 space-x-4 flex justify-between">
        <div className="w-4/5 grow">
          <p className=" text-lg font-normal">{subproject.name}</p>
          <p className="text-sm font-light"> {subproject.description}</p>
        </div>
        <PrimaryButton className="grow-0 bg-pale-yellow">Open 3D viewer</PrimaryButton>
      </div>
    </div>
  )
}

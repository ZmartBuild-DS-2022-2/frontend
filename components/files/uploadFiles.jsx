import { useState } from "react"
import { useForm } from "react-hook-form"

import PrimaryButton from "../basics/PrimaryButton"
import { uploadModel } from "../../services/models/uploadModel"


export default function UploadFilesForm() {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const [isValid, setIsValid] = useState(false)
  const {
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({ mode: "onChange" })

	const handleFileEvent =  (e) => {
			const chosenFiles = Array.prototype.slice.call(e.target.files)
			console.log(chosenFiles)
			setIsValid(chosenFiles.length != 0)
			setUploadedFiles(chosenFiles)
	}
	const onSubmit = async () => {
		try {
			console.log(uploadedFiles)
		  await uploadModel({ uploadedFiles })
		} catch (err) {
		  setErrorMessage(err.response?.data || "Something went wrong")
		  setTimeout(() => setErrorMessage(null), 5000)
		}
	  }

	return (
		<section className="grid h-screen place-items-center">
      <form
        className="flex flex-col gap-5 w-72 sm:w-96 sm:border-2 px-5 sm:px-10 py-1 sm:py-10 
        md:rounded-md bg-transparent md:bg-white"
				encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
				<input type="file" name="files[]" id="files"
					multiple="" directory="" webkitdirectory="" 
					mozdirectory="" onChange={handleFileEvent}
				/>
				<PrimaryButton text="Continue" disabled={!isValid || isSubmitting} />
			</form>

			<div className="uploaded-files-list">
				{uploadedFiles.map(file => (
					<div key={file.name}>
							{file.name}
					</div>
				))}
			</div>

			<div className="text-center text-red-500">
				<span>{errorMessage}</span>
			</div>

		</section>
	)
}
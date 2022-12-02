/* eslint-disable max-len */
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Modal } from "@nextui-org/react"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import PrimaryButton from "../basics/PrimaryButton"
import RadioInput from "../basics/RadioInput"
import { backendFetch } from "../../services"
import PageSpinner from "../PageSpinner"
import { radioButtons } from "../../constants/forms/invitationsFormInfo"

export default function InvitationForm({ openAddPeople, closeHandler, data, type, objectiveId }) {
  const {
    register,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: {
      accessType: "r",
    },
    mode: "onChange",
  })

  const [errorMessage, setErrorMessage] = useState(null)
  const [uploadMessage, setuploadMessage] = useState(false)
  const [loading, setLoading] = useState(null)

  const onSubmit = async ({ email, accessType }) => {
    try {
      setLoading(true)
      const response = await backendFetch({
        url: "/invitations",
        method: "post",
        data: { email, objectiveId, type, accessType },
      })
      console.log("R", response)
      setuploadMessage(true)
      setTimeout(() => setuploadMessage(null), 5000)
    } catch (err) {
      setErrorMessage(err.response?.data || "Something went wrong")
      setTimeout(() => setErrorMessage(null), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={openAddPeople}
      onClose={closeHandler}
      width="100vw"
      className="w-[95%] md:w-2/5 m-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <p className="text-lg">
            Add someone to&nbsp;<span className="underline">{data?.name}</span>
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-5">
            <div className="flex rounded px-2 py-1 border focus-within:border-gray-400">
              <EnvelopeIcon className="h-6 w-6" />
              <input
                className="border-none outline-none pl-3 w-full"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,
                })}
              />
            </div>
            <div className="flex rounded px-2 py-1 focus-within:border-gray-400">
              <div className="flex flex-col">
                <label className="pb-2 text-gray-700">{`Role in the ${type}`}</label>
                <div className="flex flex-col space-y-4">
                  {Array.from(Object.keys(radioButtons)).map((labelType) => {
                    return (
                      <RadioInput
                        key={labelType}
                        register={register}
                        label={radioButtons[labelType].label}
                        description={radioButtons[labelType][type]}
                        value={radioButtons[labelType].value}
                        fieldName="accessType"
                        checked={radioButtons[labelType]?.checked}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="text-center text-red-500">
              <span>{errorMessage}</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer justify="space-between">
          <button
            type="button"
            className="rounded-md py-1.5 transition-all duration-150 bg-gray-600 enabled:hover:bg-gray-700 text-primary-contrast font-medium px-5 md:px-7"
            onClick={closeHandler}
          >
            Close
          </button>
          <div className="flex items-center">
            <PrimaryButton
              className="bg-primary text-primary-contrast enabled:hover:bg-primary-hover font-medium mr-2"
              disabled={!isValid || isSubmitting}
            >
              Add collaborator
            </PrimaryButton>
            {loading && <PageSpinner w={5} wsm={5} wlg={5} />}
            {uploadMessage && <p className="text-xs">Invitation sended!</p>}
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

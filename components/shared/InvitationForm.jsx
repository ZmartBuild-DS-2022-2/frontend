/* eslint-disable max-len */
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Modal } from "@nextui-org/react"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import PrimaryButton from "../basics/PrimaryButton"
import RadioInput from "../basics/RadioInput"

export default function InvitationForm({ openAddPeople, closeHandler, data, label_ }) {
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

  const radioButtons = {
    reader: {
      value: "r",
      label: "Reader",
      organization: "Readers can see all projects from the organization",
      project: "Readers can see all subprojects from the project",
    },
    member: {
      value: "w",
      label: "Member",
      organization: "Members can edit the information from the organization and from all projects",
      project: "Members can edit the information from the project and from all subprojects",
    },
    administrator: {
      value: "a",
      label: "Administrator",
      organization:
        "Administrators have full administrative rights to the organization and have complete access to all projects",
      project:
        "Administrators have full administrative rights to the projects and have complete access to all subprojects",
    },
  }

  const onSubmit = async ({ email, accessType }) => {
    try {
      console.log(email, accessType)
    } catch (err) {
      setErrorMessage(err.response?.data || "Something went wrong")
      setTimeout(() => setErrorMessage(null), 5000)
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
                <label className="pb-2 text-gray-700">{`Role in the ${label_}`}</label>
                <div className="flex flex-col space-y-4">
                  {Array.from(Object.keys(radioButtons)).map((type) => {
                    return (
                      <RadioInput
                        key={type}
                        register={register}
                        label={radioButtons[type].label}
                        description={radioButtons[type][label_]}
                        value={radioButtons[type].value}
                        fieldName="accessType"
                        checked={radioButtons[type]?.checked}
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
          <PrimaryButton
            className="bg-primary text-primary-contrast enabled:hover:bg-primary-hover font-medium"
            disabled={!isValid || isSubmitting}
          >
            Add collaborator
          </PrimaryButton>
          <button
            type="button"
            className="rounded-md py-1.5 transition-all duration-150 bg-gray-600 enabled:hover:bg-gray-700 text-primary-contrast font-medium px-5 md:px-7"
            onClick={closeHandler}
          >
            Close
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

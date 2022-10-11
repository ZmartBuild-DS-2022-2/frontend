import { EnvelopeIcon, UserIcon, LockClosedIcon } from "@heroicons/react/24/solid"

const registerFields = [
  {
    name: "email",
    type: "text",
    icon: <EnvelopeIcon className="h-6 w-6" />,
    placeholder: "Email",
    validations: {
      required: { value: true, message: "Email can't be empty" },
      pattern: {
        value: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,
        message: "Enter a valid email address",
      },
    },
  },
  {
    name: "fullname",
    type: "text",
    icon: <UserIcon className="h-6 w-6" />,
    placeholder: "Full Name",
    validations: {
      required: { value: true, message: "Full name can't be empty" },
      pattern: {
        value: /^[a-zA-Z ]{2,30}$/,
        message: "Full name must be at least 2 characters long and with no numbers",
      },
    },
  },
  {
    name: "password",
    type: "password",
    icon: <LockClosedIcon className="h-6 w-6" />,
    placeholder: "Password",
    validations: {
      required: { value: true, message: "Password can't be empty" },
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/,
        message: "Password needs at least eight characters, one letter and one number",
      },
    },
  },
  {
    name: "passwordConfirmation",
    type: "password",
    icon: <LockClosedIcon className="h-6 w-6" />,
    placeholder: "Repeat Password",
  },
]

export default registerFields

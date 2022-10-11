import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid"

const loginFields = [
  {
    name: "email",
    type: "text",
    icon: <EnvelopeIcon className="h-6 w-6" />,
    placeholder: "Email",
    validations: { required: true, pattern: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/ },
  },
  {
    name: "password",
    type: "password",
    icon: <LockClosedIcon className="h-6 w-6" />,
    placeholder: "Password",
    validations: { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/ },
  },
]

export default loginFields

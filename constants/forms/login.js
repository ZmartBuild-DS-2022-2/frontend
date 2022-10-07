import { EmailIcon, LockIcon } from "../../icons"

const loginFields = [
  {
    name: "email",
    type: "text",
    icon: <EmailIcon />,
    placeholder: "Email",
    validations: { required: true, pattern: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/ },
  },
  {
    name: "password",
    type: "password",
    icon: <LockIcon />,
    placeholder: "Password",
    validations: { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/ },
  },
]

export default loginFields

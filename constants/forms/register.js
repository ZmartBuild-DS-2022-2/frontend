import { EmailIcon, UserIcon, LockIcon } from "../../icons"

const registerFields = [
  {
    name: "email",
    type: "text",
    icon: <EmailIcon />,
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
    icon: <UserIcon />,
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
    icon: <LockIcon />,
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
    icon: <LockIcon />,
    placeholder: "Repeat Password",
  },
]

export default registerFields

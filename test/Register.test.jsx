import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { AuthContextProvider } from "../stores/AuthContext"
import "@testing-library/jest-dom"

import RegisterForm from "../components/RegisterForm"

test("Given render Register When the page load Then show text Sign up", () => {
  // Given
  const context = { user: "yes" }
  render(
    <AuthContextProvider value={context}>
      <RegisterForm />
    </AuthContextProvider>
  )

  // When
  const registerElement = screen.getByText(/Sign Up/i)

  // Then
  expect(registerElement).toBeInTheDocument()
});
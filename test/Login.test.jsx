import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { AuthContextProvider } from "../stores/AuthContext"
import "@testing-library/jest-dom"

import LoginForm from "../components/LoginForm"

test("Given render Login When the page load Then show text Sign in", () => {
  // Given
  const context = { user: "yes" }
  render(
    <AuthContextProvider value={context}>
      <LoginForm />
    </AuthContextProvider>
  )

  // When
  const loginElement = screen.getByText(/Sign In/i)

  // Then
  expect(loginElement).toBeInTheDocument()
})
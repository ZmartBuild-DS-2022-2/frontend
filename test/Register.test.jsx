import { render, screen } from "@testing-library/react"
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
})

test("Given render Register When the page load Then show input email", () => {
  // Given
  const context = { user: "yes" }
  render(
    <AuthContextProvider value={context}>
      <RegisterForm />
    </AuthContextProvider>
  )

  // When
  const emailElement = screen.getByPlaceholderText(/Email/i)

  // Then
  expect(emailElement).toBeInTheDocument()
})

test("Given render Register When the page load Then show input name", () => {
  // Given
  const context = { user: "yes" }
  render(
    <AuthContextProvider value={context}>
      <RegisterForm />
    </AuthContextProvider>
  )

  // When
  const nameElement = screen.getByPlaceholderText(/Full Name/i)

  // Then
  expect(nameElement).toBeInTheDocument()
})

test("Given render Register When the page load Then show password input", () => {
  // Given
  const context = { user: "yes" }
  render(
    <AuthContextProvider value={context}>
      <RegisterForm />
    </AuthContextProvider>
  )

  // When
  const pwdElement = screen.getByPlaceholderText("Password")

  // Then
  expect(pwdElement).toBeInTheDocument()
})

test("Given render Register When the page load Then show confirm password input", () => {
  // Given
  const context = { user: "yes" }
  render(
    <AuthContextProvider value={context}>
      <RegisterForm />
    </AuthContextProvider>
  )

  // When
  const confirmPwdElement = screen.getByPlaceholderText(/Confirm Password/i)

  // Then
  expect(confirmPwdElement).toBeInTheDocument()
})

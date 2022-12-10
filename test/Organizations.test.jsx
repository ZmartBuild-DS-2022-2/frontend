import { render, screen } from "@testing-library/react"
import { AuthContextProvider } from "../stores/AuthContext"
import "@testing-library/jest-dom"

import OrganizationForm from "../components/organizations/OrganizationForm"

test("Given render OrganizationForm When the page load Then show title New Subroject", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <OrganizationForm />
    </AuthContextProvider>
  )

  // When
  const formElement = screen.getByText(/New Organization/i)

  // Then
  expect(formElement).toBeInTheDocument()
})

test("Given render OrganizationForm When the page load Then show Organization name input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <OrganizationForm />
    </AuthContextProvider>
  )

  // When
  const nameInput = screen.getByText(/Organization Name/i)

  // Then
  expect(nameInput).toBeInTheDocument()
})

test("Given render OrganizationForm When the page load Then show Organization email input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <OrganizationForm />
    </AuthContextProvider>
  )

  // When
  const emailInput = screen.getByText(/Organization Email/i)

  // Then
  expect(emailInput).toBeInTheDocument()
})

test("Given render OrganizationForm When the page load Then show Organization description input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <OrganizationForm />
    </AuthContextProvider>
  )

  // When
  const descInput = screen.getByText(/Description/i)

  // Then
  expect(descInput).toBeInTheDocument()
})

test("Given render OrganizationForm When the page load Then show Organization web site input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <OrganizationForm />
    </AuthContextProvider>
  )

  // When
  const welogoput = screen.getByText(/Organization Web Site/i)

  // Then
  expect(welogoput).toBeInTheDocument()
})

test("Given render OrganizationForm When the page load Then show Organization logo input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <OrganizationForm />
    </AuthContextProvider>
  )

  // When
  const logoInput = screen.getByText(/Organization Logo/i)

  // Then
  expect(logoInput).toBeInTheDocument()
})

test("Given render OrganizationForm When the page load Then show Organization create button", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <OrganizationForm />
    </AuthContextProvider>
  )

  // When
  const button = screen.getByText(/Create organization/i)

  // Then
  expect(button).toBeInTheDocument()
})

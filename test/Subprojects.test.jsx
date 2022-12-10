import { render, screen } from "@testing-library/react"
import { AuthContextProvider } from "../stores/AuthContext"
import "@testing-library/jest-dom"

import SubprojectForm from "../components/subprojects/SubprojectForm"

test("Given render SubprojectForm When the page load Then show title New Subroject", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <SubprojectForm />
    </AuthContextProvider>
  )

  // When
  const formElement = screen.getByText(/New Subproject/i)

  // Then
  expect(formElement).toBeInTheDocument()
})

test("Given render SubprojectForm When the page load Then show Subproject name input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <SubprojectForm />
    </AuthContextProvider>
  )

  // When
  const nameInput = screen.getByText(/Subproject Name/i)

  // Then
  expect(nameInput).toBeInTheDocument()
})

test("Given render SubprojectForm When the page load Then show Subproject description input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <SubprojectForm />
    </AuthContextProvider>
  )

  // When
  const descInput = screen.getByText(/Description/i)

  // Then
  expect(descInput).toBeInTheDocument()
})

test("Given render SubprojectForm When the page load Then show Subproject gltf file input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <SubprojectForm />
    </AuthContextProvider>
  )

  // When
  const gltfInput = screen.getByText(/gltf file/i)

  // Then
  expect(gltfInput).toBeInTheDocument()
})

test("Given render SubprojectForm When the page load Then show Subproject bin file input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <SubprojectForm />
    </AuthContextProvider>
  )

  // When
  const binInput = screen.getByText(/bin file/i)

  // Then
  expect(binInput).toBeInTheDocument()
})

test("Given render SubprojectForm When the page load Then show Subproject create button", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <SubprojectForm />
    </AuthContextProvider>
  )

  // When
  const button = screen.getByText(/Create subproject/i)

  // Then
  expect(button).toBeInTheDocument()
})

import { render, screen } from "@testing-library/react"
import { AuthContextProvider } from "../stores/AuthContext"
import "@testing-library/jest-dom"

import ProjectForm from "../components/projects/ProjectForm"

test("Given render ProjectForm When the page load Then show title New Project", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <ProjectForm />
    </AuthContextProvider>
  )

  // When
  const formElement = screen.getByText(/New Project/i)

  // Then
  expect(formElement).toBeInTheDocument()
})

test("Given render ProjectForm When the page load Then show Project name input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <ProjectForm />
    </AuthContextProvider>
  )

  // When
  const nameInput = screen.getByPlaceholderText(/Miles Bridge Construction/i)

  // Then
  expect(nameInput).toBeInTheDocument()
})

test("Given render ProjectForm When the page load Then show Description input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <ProjectForm />
    </AuthContextProvider>
  )

  // When
  const descInput = screen.getByPlaceholderText(/Squared m2, location, etc/i)

  // Then
  expect(descInput).toBeInTheDocument()
})

test("Given render ProjectForm When the page load Then show Project Images input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <ProjectForm />
    </AuthContextProvider>
  )

  // When
  const imgInput = screen.getByText(/Project Images/i)

  // Then
  expect(imgInput).toBeInTheDocument()
})

test("Given render ProjectForm When the page load Then show Project Images input", () => {
  // Given
  const context = { user: "yes" }

  render(
    <AuthContextProvider value={context}>
      <ProjectForm />
    </AuthContextProvider>
  )

  // When
  const imgInput = screen.getByText(/Project Images/i)

  // Then
  expect(imgInput).toBeInTheDocument()
})

import { render, screen } from "@testing-library/react"
import { AuthContextProvider } from "../stores/AuthContext"
import "@testing-library/jest-dom"

import Home from "../pages/index"

test("Given render Home When the page load Then show login because there is no valid user", () => {
  // Given
  const context = { user: "yes" }
  render(
    <AuthContextProvider value={context}>
      <Home />
    </AuthContextProvider>
  )

  // When
  const loginLink = screen.getByText(/Sign In/i)

  // Then
  expect(loginLink).toBeInTheDocument()
})

import { render, screen } from "@testing-library/react"
import { useState, createContext, useEffect } from "react"
import { AuthContextProvider } from "../stores/AuthContext"
import "@testing-library/jest-dom"

import Home from "../pages/index"

test("Given render App When the page load Then show text Zmartbuild", () => {
  // Given
  const context = { user: "yes" }
  render(
    <AuthContextProvider value={context}>
      <Home />
    </AuthContextProvider>
  )

  // When
  const homeElement = screen.getByText(/ZmartBuild/i)

  // Then
  expect(homeElement).toBeInTheDocument()
})

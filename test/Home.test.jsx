import { render, screen } from "@testing-library/react"
import Home from "../pages/index"

test("Given render App When the page load Then show text Zmartbuild", () => {
  // Given
  render(<Home />)

  // When
  const homeElement = screen.getByText(/ZmartBuild/i)

  // Then
  expect(homeElement).toBeInTheDocument()
})

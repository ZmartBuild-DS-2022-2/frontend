import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

test("Given render App When the page load Then show text learn react link", () => {
  // Given
  render(<Home />);

  // When
  const linkElement = screen.getByText(/ZmartBuild/i);

  // Then
  expect(linkElement).toBeInTheDocument();
});
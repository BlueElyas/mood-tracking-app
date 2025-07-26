import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

describe("Homepage", () => {
  it("renders the homepage with correct styles and content", () => {
    render(<Homepage />);

    const homepageElement = screen.getByText("Homepage");
    expect(homepageElement).toBeInTheDocument();

    const iconElement = screen.getByAltText("check icon");
    expect(iconElement).toBeInTheDocument();
  });
});

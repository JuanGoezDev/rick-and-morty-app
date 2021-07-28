import { render, screen } from "@testing-library/react";
import Character from "./index";
import charactersData from "../../constants/mockedData";

describe("When render the Character component", () => {
  it("should render the character image and title", async () => {
    render(<Character characterData={charactersData[0]} />);

    const characterTitle = screen.getByText(charactersData[0].name);
    expect(characterTitle).toBeInTheDocument();
    
    const imageTitle = screen.getByTitle(charactersData[0].name)
    expect(imageTitle).toBeInTheDocument();

  });
});

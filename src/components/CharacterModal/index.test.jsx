import { render, screen } from "@testing-library/react";
import CharacterModal from "./index";
import charactersData from "../../constants/mockedData";

describe("When render the Character dialog component", () => {
  it("should open the modal with the character data and the close button", async () => {
    render(
      <CharacterModal
        open
        handleClose={() => {
          console.log("test");
        }}
        characterData={charactersData[0]}
      />
    );

    const gender = screen.getByText(`gender: ${charactersData[0].gender}`);
    expect(gender).toBeInTheDocument();

    const species = screen.getByText(`species: ${charactersData[0].species}`);
    expect(species).toBeInTheDocument();

    const status = screen.getByText(`status: ${charactersData[0].status}`);
    expect(status).toBeInTheDocument();

    const location = screen.getByText(`location: ${charactersData[0].location.name}`);
    expect(location).toBeInTheDocument();

    const button = screen.getByText("Close");
    expect(button).toBeInTheDocument();
  });

  it("shouldn't open the modal", async () => {
    render(
      <CharacterModal
        open={false}
        handleClose={() => {
          console.log("test");
        }}
        characterData={charactersData[0]}
      />
    );

    const gender = screen.queryByText(`gender: ${charactersData[0].gender}`);
    expect(gender).not.toBeInTheDocument();

    const button = screen.queryByText("Close");
    expect(button).not.toBeInTheDocument();
  });
});

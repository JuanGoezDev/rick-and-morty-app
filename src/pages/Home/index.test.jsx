import { render, screen } from "@testing-library/react";
import Home from "./index";
import ReduxProvider from "../../helpers/ReduxProvider";

describe("render the Home component", () => {
  it("should render the title", async () => {
    render(
      <ReduxProvider>
        <Home />
      </ReduxProvider>
    );

    const homeTitle = screen.getByText("Rick & Morty");
    expect(homeTitle).toBeInTheDocument();
  });
});

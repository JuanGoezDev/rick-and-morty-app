import { render, screen } from "@testing-library/react";
import Paginator from "./index";

import ReduxProvider from "../../helpers/ReduxProvider";

describe("When render the Paginator component", () => {
  it("should render 2 buttons to fetch the prev and next page", async () => {
    render(
      <ReduxProvider>
        <Paginator />
      </ReduxProvider>
    );

    const prevPageButton = screen.getByText("Prev Page");
    expect(prevPageButton).toBeInTheDocument();

    const nextPageButton = screen.getByText("Next Page");
    expect(nextPageButton).toBeInTheDocument();
  });
});

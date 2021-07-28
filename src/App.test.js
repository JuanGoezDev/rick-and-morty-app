import { render } from "@testing-library/react";
import App from "./App";
import ReduxProvider from "./helpers/ReduxProvider";

test("render the App component", () => {
  render(
    <ReduxProvider>
      <App />
    </ReduxProvider>
  );
});

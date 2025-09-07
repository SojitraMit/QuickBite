import { render, screen } from "@testing-library/react";
import RestaurantCards, { WithVegLable } from "../RestaurantCards";
import MOCK_DATA from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("resCard", () => {
  render(<RestaurantCards resData={MOCK_DATA} />);

  const name = screen.getByText("Crave Eatables");

  expect(name).toBeInTheDocument();
});

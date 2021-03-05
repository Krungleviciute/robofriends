import React from "react";
import Card from "./Card";
import { create } from "react-test-renderer";

describe("Card component", () => {
  it("should check if Card component renders", () => {
    const card = create(<Card />);
    expect(card.toJSON()).toMatchSnapshot();
  });
});

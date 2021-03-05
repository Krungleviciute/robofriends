import React from "react";
import { create } from "react-test-renderer";
import CardList from "./CardList";

describe("CardList Component Tests", () => {
  it("should check if Card List component renders", () => {
    const mockRobots = [
      {
        id: 1,
        name: "Dalia Henry",
        username: "DH",
        email: "dalia@henry.com",
      },
    ];
    const cardList = create(<CardList robots={mockRobots} />);
    expect(cardList.toJSON()).toMatchSnapshot();
  });
});

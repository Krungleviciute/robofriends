import React from "react";
import { create } from "react-test-renderer";
import CardList from "./CardList";
import MainPage from "./MainPage";

const mockRobots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
];

let wrapper;
let wrapper2;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };

  wrapper = create(<MainPage {...mockProps} />);
});

it("Should render main page without crashing", () => {
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it("should filter robots corectly", () => {
  expect(wrapper.getInstance().filterRobots([], "")).toEqual([]);
  expect(wrapper.getInstance().filterRobots(mockRobots, "z")).toEqual([]);
  expect(wrapper.getInstance().filterRobots(mockRobots, "e")).toEqual(
    mockRobots
  );
  expect(wrapper.getInstance().filterRobots(mockRobots, "a")).toEqual([
    mockRobots[0],
  ]);
});

it("should test when isPending is false/true", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: true,
  };

  wrapper2 = create(<MainPage {...mockProps2} />);
  const testInstance = wrapper2.root;
  expect(testInstance.findByType("h2").props.id).toBe("loading");
  // Checks with original wrapper when pending is false and should show cardlist component
  expect(wrapper.root.findByType(CardList)).toBeTruthy();
});

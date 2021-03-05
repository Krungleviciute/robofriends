import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots reducer", () => {
  const initialState = {
    searchField: "",
  };

  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: "",
    });
  });

  it("should handle search searchField event", () => {
    expect(
      reducers.searchRobots(initialState, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("requestRobots reducer", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
  };

  it("should return default state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ ...initialStateRobots, isPending: true });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
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
        ],
      })
    ).toEqual({
      ...initialStateRobots,
      isPending: false,
      robots: [
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
      ],
    });
  });

  it("should handle REQUEST_ROBOTS_Failed action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Some Error message",
      })
    ).toEqual({
      ...initialStateRobots,
      error: "Some Error message",
      isPending: false,
    });
  });
});

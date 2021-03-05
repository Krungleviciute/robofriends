import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import fetchMock, { mock } from "fetch-mock";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import * as actions from "./actions";

const mockStore = configureMockStore([thunkMiddleware]);

describe("setSearchField", () => {
  const text = "hello";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };

  it("should create action to search robots", () => {
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("requestRobots", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  fetchMock.getOnce("https://jsonplaceholder.typicode.com/users", {
    body: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ],

    headers: { "content-type": "application/json" },
  });

  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();

  const expectedActions = [
    {
      type: REQUEST_ROBOTS_PENDING,
    },
    {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
      ],
    },
  ];

  it("should handle requesting robots api with type pending", () => {
    expect(action[0]).toEqual(expectedActions[0]);
  });

  it("should handle robots success", () => {
    expect(action[1]).toEqual(expectedActions[1]);
  });

  it("should handle RequestRobots failed", () => {
    const store = mockStore();
    fetchMock.getOnce("https://jsonplaceholder.typicode.com/users", {
      throws: { error: "Oops!" },
    });

    return store.dispatch(actions.requestRobots()).then(() => {
      const expectedActionsFailed = [
        {
          type: REQUEST_ROBOTS_PENDING,
        },
        {
          type: REQUEST_ROBOTS_FAILED,
          payload: { error: "Oops!" },
        },
      ];
      const action = store.getActions();
      expect(action).toEqual(expectedActionsFailed);
    });
  });
});

import { reducer } from "./reducer";
import { State, Action } from "../types";

describe("test reducer", () => {
  it("send message", () => {
    const state: State = {
      messages: [],
    };

    const message = {
      name: "User",
      message: "test",
    };
    const action1 = {
      type: "SEND_MESSAGE",
      message: { ...message },
    };

    expect(reducer(state, action1)).toEqual({
      messages: [{ message: "test", name: "User" }],
    });
  });

  it("get messages obj", () => {
    const state: State = {
      messages: [],
    };

    const action2 = {
      type: "GET_MESSAGES",
      messages: [
        {
          name: "user1",
          message: "test message 1",
        },
        {
          name: "user2",
          message: "test message 2",
        },
        {
          name: "user3",
          message: "test message 3",
        },
      ],
    };

    expect(reducer(state, action2)).toEqual({
      messages: [
        {
          name: "user1",
          message: "test message 1",
        },
        {
          name: "user2",
          message: "test message 2",
        },
        {
          name: "user3",
          message: "test message 3",
        },
      ],
    });
  });

  it("indefinite action", () => {
    const state: State = {
      messages: [],
    };

    const action3 = {
      type: "GET_USER",
      messages: [
        {
          name: "user1",
          message: "test message 1",
        },
        {
          name: "user2",
          message: "test message 2",
        },
        {
          name: "user3",
          message: "test message 3",
        },
      ],
    };

    expect(reducer(state, action3)).toEqual({
      messages: [],
    });
  });
});

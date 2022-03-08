import { createStore } from "redux";
import { reducer } from "../redux/reducer";
import { State } from "../types";
import { sleep } from "../utils/utils";
import { payloadMessages } from "./payloadMessages";

describe("payloadMessages", () => {
  it("load message", async () => {
    global.fetch = jest.fn();
    const state: State = {
      messages: [],
    };
    const messages = [
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
    ];

    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(messages),
        }) as Promise<Response>
    );

    const store = createStore(reducer, state);
    await payloadMessages(store);
    await sleep(500).then(() =>
      expect(store.getState().messages).toEqual(messages)
    );
  });
});

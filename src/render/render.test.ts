import { State } from "../types";
import { render } from "./render";

describe("render", () => {
  document.body.innerHTML = `<div id="chat"></div>`;
  const state: State = {
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

  render(state);
  it("render", async () => {
    expect(
      (
        document.querySelector(
          ".message-list li:nth-child(1) h4"
        ) as HTMLElement
      ).innerHTML
    ).toBe("user1");
    expect(
      (document.querySelector(".message-list li:nth-child(1) p") as HTMLElement)
        .innerHTML
    ).toBe("test message 1");
    expect(
      (
        document.querySelector(
          ".message-list li:nth-child(2) h4"
        ) as HTMLElement
      ).innerHTML
    ).toBe("user2");
    expect(
      (document.querySelector(".message-list li:nth-child(2) p") as HTMLElement)
        .innerHTML
    ).toBe("test message 2");
    expect(
      (
        document.querySelector(
          ".message-list li:nth-child(3) h4"
        ) as HTMLElement
      ).innerHTML
    ).toBe("user3");
    expect(
      (document.querySelector(".message-list li:nth-child(3) p") as HTMLElement)
        .innerHTML
    ).toBe("test message 3");
  });
});

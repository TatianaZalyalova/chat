import $ from "jquery";
import { createStore } from "redux";
import { reducer } from "./redux/reducer";
import "./css/style.css";

import { render } from "./render/render";
import { sendMessage } from "./firebase/messagesApi";
import { State, Message } from "./types";
import { payloadMessages } from "./firebase/payloadMessages";
import { reEscape, emoji, sleep } from "./utils/utils";

const formSendMessage = document.querySelector(
  "#form-message"
) as HTMLFormElement;
const nameInput = formSendMessage.querySelector("#name") as HTMLFormElement;
const messageInput = formSendMessage.querySelector(
  "#message"
) as HTMLFormElement;
const error = formSendMessage.querySelector(".error") as HTMLFormElement;
const state: State = { messages: [] };
const store = createStore(reducer, state);

store.subscribe(() => {
  render(store.getState());
});

payloadMessages(store);

formSendMessage.addEventListener("submit", async function (ev): Promise<void> {
  ev.preventDefault();
  const nameUser: string = nameInput.value;
  const messageUser: string = messageInput.value;
  if (nameUser && messageUser) {
    const message: Message = {
      name: nameUser,
      message: messageUser,
    };
    messageInput.value = "";
    await sendMessage(message);

    store.dispatch({
      type: "SEND_MESSAGE",
      message: { ...message },
    });
  } else {
    error.classList.add("visible");
    sleep(2000).then(() => error.classList.remove("visible"));
  }
});

messageInput.addEventListener("keyup", function () {
  let text: string = messageInput.value;

  $.each(emoji, (plaintext, unicode) => {
    text = text.replace(new RegExp(reEscape(plaintext), "g"), unicode);
  });

  messageInput.value = text;
});

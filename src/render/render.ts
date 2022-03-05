import { State, Message } from "../types";

export function render(state: State) {
  const messageListTag = document.querySelector("#chat") as HTMLDivElement;
  messageListTag.innerHTML = `<ul class="message-list" >${state.messages
    .map(
      (message: Message) =>
        `<li><h4>${message.name}</h4>
        <p>${message.message}</p>
        </li>`
    )
    .join("")}
    </ul>`;
  messageListTag.scrollTop = messageListTag.scrollHeight;
}

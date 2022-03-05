import { Store } from "redux";
import { getMessagesList } from "./messagesApi";

export async function payloadMessages(store: Store): Promise<void> {
  const messagesList = await getMessagesList();
  store.dispatch({
    type: "GET_MESSAGES",
    messages: messagesList,
  });
}

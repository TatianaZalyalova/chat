import { Store } from "redux";
import { getMessagesList } from "./messagesApi";

interface Thing {
  date?: any;
  name: string;
  message: string;
}
export async function payloadMessages(store: Store): Promise<void> {
  const messagesList = await getMessagesList();
  messagesList.map((messages: any) => {
    delete messages.date;
    return messages;
  });

  store.dispatch({
    type: "GET_MESSAGES",
    messages: messagesList,
  });
}

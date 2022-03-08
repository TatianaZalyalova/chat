import { Message } from "../types";

const config = {
  firebaseBaseUrl: "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com",
  firebaseCollection: "messages.json",
};

export async function getMessagesList(): Promise<void | Message[]> {
  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) =>
      Object.values(data).map((el) => ({
        ...(el as Message),
      }))
    )
    .catch(() => console.log("error, not response"));
}

export async function sendMessage(data: Message): Promise<boolean> {
  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}`, {
    method: "POST",
    body: JSON.stringify({
      ...data,
      date: new Date(),
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export function observeWithEventSource(
  cb: (data: { name: string; message: string }) => void
): void {
  const evtSource: any = new EventSource(
    `${config.firebaseBaseUrl}/${config.firebaseCollection}`
  );
  function handler(ev: MessageEvent) {
    return cb(JSON.parse(ev.data).data);
  }
  evtSource.addEventListener("put", handler);
}

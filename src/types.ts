export interface State {
  messages: Message[] | [];
}

export interface Message {
  name: string;
  message: string;
}

export interface Action {
  type: string;
  message: string;
  messages: Message[];
}

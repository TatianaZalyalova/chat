import { State, Action } from "../types";

export function reducer(state: any, action: any): State {
  const updatedState = {
    ...state,
  };
  switch (action.type) {
    case "SEND_MESSAGE":
      updatedState.messages.push({
        ...action.message,
      });

      return {
        ...state,
        messages: updatedState.messages,
      };

    case "GET_MESSAGES":
      return {
        ...state,
        messages: action.messages,
      };

    default:
      return state;
  }
}

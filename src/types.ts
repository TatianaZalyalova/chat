export interface State {
  messages: Message[] | [];
}

export interface Message {
  [x: string]: string | number | Date;
  name: string;
  message: string;
}

export interface Action {
  type: string;
  [key: string]: any;
}

/*export interface ISend {
      type: string,
      [key: string]: any;
  }

  export interface IList {
    type: string,
    [key: string]: any;
}*/

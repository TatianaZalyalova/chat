export const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export function reEscape(s: string): string {
  return s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

export const emoji = {
  ":)": "🙂",
  ":(": "🙁",
  XD: "😆",
  ":-P": "😋",
  "^^": "😄",
};

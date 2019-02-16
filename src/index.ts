import { tokenize, titleCaseWord, untokenize } from "./utils";

export function titleCase(title: string): string {
  const tokens = tokenize(title).map(titleCaseWord);
  return untokenize(tokens);
}

export default {
  titleCase,
};

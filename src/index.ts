import { tokenize, capitalize, untokenize, lowercase, isSpecialWord } from "./utils";

export function titleCase(title: string): string {
  return untokenize(
    tokenize(title).map((word, idx, arr) => {
      if (idx === 0 || idx === arr.length - 1) {
        return capitalize(word);
      }
      return isSpecialWord(word) ? lowercase(word) : capitalize(word);
    })
  );
}

export default {
  titleCase,
};

import { tokenize, titleCaseWord, untokenize, normalize, isSpecialWord } from "./utils";

export function titleCase(title: string): string {
  return untokenize(
    tokenize(title)
      .map(normalize)
      .map((normalizedWord, idx, arr) => {
        if (idx === 0 || idx === arr.length - 1) {
          return titleCaseWord(normalizedWord);
        }
        return isSpecialWord(normalizedWord) ? normalizedWord : titleCaseWord(normalizedWord);
      })
  );
}

export default {
  titleCase,
};

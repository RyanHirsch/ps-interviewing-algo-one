import { tokenize, titleCaseWord, untokenize, normalize, isSpecialWord } from "./utils";

export function titleCase(title: string): string {
  const normalizedTokens = tokenize(title).map(normalize);
  const titleCasedTokens = normalizedTokens.map((normalizedWord, idx) => {
    if (idx === 0 || idx === normalizedTokens.length - 1) {
      return titleCaseWord(normalizedWord);
    }
    return isSpecialWord(normalizedWord) ? normalizedWord : titleCaseWord(normalizedWord);
  });
  return untokenize(titleCasedTokens);
}

export default {
  titleCase,
};

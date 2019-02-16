const separator = " ";

export function tokenize(input: string): string[] {
  return input.split(separator);
}

export function untokenize(input: string[]): string {
  return input.join(separator);
}

export function titleCaseWord(word: string): string {
  const specialWords = ["a", "the", "to", "at", "in", "with", "and", "but", "or"];

  const normalizedWord = word.toLowerCase();
  if (specialWords.includes(normalizedWord)) {
    return normalizedWord;
  }

  const [first, ...rest] = normalizedWord.split("");
  return [first.toUpperCase(), ...rest].join("");
}

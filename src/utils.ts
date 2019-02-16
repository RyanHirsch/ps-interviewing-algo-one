const separator = " ";

export function tokenize(input: string): string[] {
  return input.split(separator);
}

export function untokenize(input: string[]): string {
  return input.join(separator);
}

export function normalize(input: string): string {
  return input.toLowerCase();
}

export function isSpecialWord(word: string): boolean {
  const specialWords = ["a", "the", "to", "at", "in", "with", "and", "but", "or"];

  const normalizedWord = word.toLowerCase();
  return specialWords.includes(normalizedWord);
}

export function titleCaseWord(word: string): string {
  const [first, ...rest] = word.split("");
  return [first.toUpperCase(), ...rest].join("");
}

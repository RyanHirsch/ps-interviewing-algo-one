const separator = " ";

export function tokenize(input: string): string[] {
  return input.split(separator);
}

export function untokenize(input: string[]): string {
  return input.join(separator);
}

export function lowercase(input: string): string {
  return input.toLowerCase();
}

export function isSpecialWord(word: string): boolean {
  const specialWords = ["a", "the", "to", "at", "in", "with", "and", "but", "or"];
  const regEx = new RegExp(`^(${specialWords.join("|")})$`, "i");
  return regEx.test(word);
}

export function capitalize(word: string): string {
  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
}

import { tokenize, untokenize, capitalize, lowercase, isSpecialWord } from "../utils";

describe("Utils", () => {
  describe("untokenize", () => {
    it("returns one word when passed a single item array", () => {
      const input = "hello";
      const result = untokenize([input]);
      expect(result).toEqual(input);
    });

    it("returns a sentence when passed an array of words ", () => {
      const expected = "how are you doing";
      const input = ["how", "are", "you", "doing"];
      const result = untokenize(input);
      expect(result).toEqual(expected);
    });
  });

  describe("tokenize", () => {
    it("returns a single item array when passed one word", () => {
      const input = "hello";
      const result = tokenize(input);
      expect(result).toEqual([input]);
    });

    it("returns an array of words from a sentence", () => {
      const input = "how are you doing";
      const expected = ["how", "are", "you", "doing"];
      const result = tokenize(input);
      expect(result).toEqual(expected);
    });
  });

  describe("normalize word", () => {
    it("returns a lowercase version of an all capital word", () => {
      const input = "HELLO";
      const result = lowercase(input);
      expect(result).toEqual("hello");
    });

    it("returns a lowercase version of a mixed case word", () => {
      const input = "bYe";
      const result = lowercase(input);
      expect(result).toEqual("bye");
    });
  });

  describe("isSpecialWord", () => {
    it("returns true for all special words", () => {
      const inputs = ["a", "the", "to", "at", "in", "with", "and", "but", "or"];
      expect.assertions(inputs.length);

      inputs.forEach(input => {
        const result = isSpecialWord(input);
        expect(result).toEqual(true);
      });
    });

    it("returns false for non-special words", () => {
      const input = "hello";
      const result = isSpecialWord(input);
      expect(result).toEqual(false);
    });
  });

  describe("titleCaseWord", () => {
    it("capitalizes the first letter for a word", () => {
      const input = "hello";
      const expected = "Hello";
      const result = capitalize(input);
      expect(result).toEqual(expected);
    });
  });
});

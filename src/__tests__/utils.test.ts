import { tokenize, untokenize, titleCaseWord } from "../utils";

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

  describe("titleCaseWord", () => {
    it("capitalizes the first letter for a non-special word", () => {
      const input = "hello";
      const expected = "Hello";
      const result = titleCaseWord(input);
      expect(result).toEqual(expected);
    });

    it("does not capitalize special words", () => {
      const inputs = ["a", "the", "to", "at", "in", "with", "and", "but", "or"];
      expect.assertions(inputs.length);

      inputs.forEach(input => {
        const result = titleCaseWord(input);
        expect(result).toEqual(input);
      });
    });

    it("downcases non-first letters", () => {
      const expected = "John";
      const result = titleCaseWord(expected.toUpperCase());
      expect(result).toEqual(expected);
    });

    it("downcases all of special words", () => {
      const resultA = titleCaseWord("A");
      expect(resultA).toEqual("a");
      const resultThe = titleCaseWord("THE");
      expect(resultThe).toEqual("the");
    });
  });
});

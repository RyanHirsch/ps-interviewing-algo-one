import { titleCase } from "../index";

test("titleCase capitalizes the first letters for all lowercase string", () => {
  const expected = "I Love Solving Problems and It Is Fun";
  const result = titleCase(expected.toLowerCase());
  expect(result).toEqual(expected);
});

test("titleCase handles random capital letters in the source string", () => {
  const input = "wHy DoEs A bIrD fLy?";
  const expected = "Why Does a Bird Fly?";
  const result = titleCase(input);
  expect(result).toEqual(expected);
});

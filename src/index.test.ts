import { generateHelloWorld } from "./app";

test("generateHelloWorldがhello worldを返す", () => {
  const actual = generateHelloWorld();
  expect(actual).toBe("hello world.");
});

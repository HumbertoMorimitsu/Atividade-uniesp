/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(test|spec).[jt]s?(x)"],
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

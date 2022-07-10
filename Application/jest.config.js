module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "setupFilesAfterEnv": [
    "@testing-library/jest-native/extend-expect"
  ],
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx"
  ],
  coverageReporters: ["lcov"]
};

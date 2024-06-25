export { };
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts',
    '!**/vendor/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage",
    "package.json",
    "package-lock.json",
    "reportWebVitals.ts",
    "jest.setup.ts",
    "index.tsx"
  ],
  moduleNameMapper: {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/file-mock.ts",
      "^@utils/(.*)$": "<rootDir>/src/utils/$1",
      "^@components/(.*)$": "<rootDir>/src/components/$1",
      "^@constants/(.*)$": "<rootDir>/src/constants/$1",
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
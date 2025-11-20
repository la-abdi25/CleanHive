import nextJest from "next/jest.js";
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const allJestConfig = {
  projects: [
    {
      displayName: "frontend",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/tests/frontend/**/*.test.[jt]s?(x)"],
      setupFilesAfterEnv: ["<rootDir>/tests/setup/frontendTests.js"],
      moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
      },
      transform: {
        "^.+\\.[jt]sx?$": [
          "babel-jest",
          {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        ],
      },
    },
    {
      displayName: "backend",
      testEnvironment: "node",
      testMatch: ["<rootDir>/tests/backend/**/*.test.[jt]s?(x)"],
      setupFilesAfterEnv: ["<rootDir>/tests/setup/backendTests.js"],
      transformIgnorePatterns: ["node_modules/(?!(jose|nanoid|@next|next)/)"],
      transform: {
        "^.+\\.[jt]sx?$": [
          "babel-jest",
          {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        ],
      },
    },
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(allJestConfig);

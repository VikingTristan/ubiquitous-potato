module.exports = {
    // projects: ["<rootDir>/src/app", "<rootDir>/src/scripts"],
    rootDir: ".",
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}"
    ],
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ],
    setupFiles: [
        "<rootDir>/jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testMatch: [
        "<rootDir>/src/App/**/*.test.js"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js",
        "<rootDir>/src/Documentation/utils/ComponentPreview/"
    ]
};

module.exports = {
    // projects: ["<rootDir>/src/app", "<rootDir>/src/scripts"],
    moduleNameMapper: {
        "\\.(svg)$": "./__mocks__/svgMock.js"
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
        "./jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js",
        "./Documentation/utils/ComponentPreview/"
    ]
};

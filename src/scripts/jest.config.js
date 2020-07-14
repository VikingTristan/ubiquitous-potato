module.exports = {
    rootDir: process.cwd(),
    collectCoverageFrom: [
        "**/*.{js,jsx}"
    ],
    setupFiles: [
        "./jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js"
    ]
};

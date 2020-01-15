module.exports = {
    projects: ["<rootDir>/src/app", "<rootDir>/src/scripts"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ]
};

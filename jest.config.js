module.exports = {
    projects: ["./src/app", "./src/scripts"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ]
};

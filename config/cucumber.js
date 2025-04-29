module.exports ={
    default: {
        paths: [
            "src/tests/features"
        ], 
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colors: true, //added
            snippetInterface: "async-await" //added
        },
        require: [
            "src/tests/step-definitions/*.ts",
            "src/tests/step-definitions/*.js",
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
}
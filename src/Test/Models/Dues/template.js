function testRunnerTemplateRunAll() {
    testRunnerTemplate1("{replace me}", true)
}

function testRunnerTemplate1(expected, verbose) {
    let d = "{replace me}"
    let t = 1
    
    if (verbose) {
        console.log("Test %s: {replace me} %s ", t, d)
    }

    return console.log((d === expected) ? "test %s pass" : "test %s fail", t)
}
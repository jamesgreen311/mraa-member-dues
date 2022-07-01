function testRunnerTemplate1(verbose) {
    let expected = 'string' 
    let t = 1
    
    if (verbose) {
        console.log("Test %s: ", t)
    }

    return console.log((expression === expected) ? "test %s pass" : "test %s fail", t)
}

function testRunnerTemplateRunAll() {
    testRunnerTemplate1(true)
}

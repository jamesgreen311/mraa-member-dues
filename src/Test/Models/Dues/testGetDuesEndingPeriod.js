function testGetDuesEndingPeriodRunAll() {
    testGetDuesEndingPeriod1("12/1", true)
}

function testGetDuesEndingPeriod1(expected, verbose) {
    let d = getDuesEndingPeriod()
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Ending Period: %s ", t, d)
    }

    return console.log((d === expected) ? "test %s pass" : "test %s fail", t)
}
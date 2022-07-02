function testGetDuesBeginPeriodRunAll() {
    testGetDuesBeginPeriod1("9/1", true)
}

function testGetDuesBeginPeriod1(expected, verbose) {
    let d = getDuesBeginPeriod()
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Begin Period: %s ", t, d)
    }

    return console.log((d === expected) ? "test %s pass" : "test %s fail", t)
}

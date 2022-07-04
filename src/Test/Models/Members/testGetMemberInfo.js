function testGetMemberInfoRunAll() {
    testGetMemberInfo1(true)
}

function testGetMemberInfo1(verbose) {
    let d = getMemberInfo()
    let t = 1
    let expected = d.length > 0
    
    if (verbose) {
        console.log("Test %s: All Member Info %s ", t, d)
    }

    return console.log((expected) ? "test %s pass" : "test %s fail", t)
}
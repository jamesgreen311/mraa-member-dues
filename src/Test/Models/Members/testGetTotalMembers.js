function testTotalMembersRunAll() {
    let number = 1
    testTotalMembers1((typeof number), true)
}

function testTotalMembers1(expected, verbose) {
    let d = getTotalMembers()
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Total Members %s ", t, d)
    }

    return console.log((typeof d === expected) ? "test %s pass" : "test %s fail", t)
}
function testGetPayPalFees1(expected, verbose) {
    let d = getPayPalFee()
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Fee %s", t, d)
    }

    return console.log((d === expected) ? "test %s pass" : "test %s fail", t)
}

function testGetPayPalFees2(expected, verbose) {
    let d = getPayPalFee()
    let t = 2
    
    if (verbose) {
        console.log("Test %s: Fee %s", t, typeof d)
    }

    return console.log((typeof d === expected) ? "test %s pass" : "test %s fail", t)
}

function testGetPayPalFeesRunAll() {
    testGetPayPalFees1(2.06, true)
    testGetPayPalFees2('number', true)

}
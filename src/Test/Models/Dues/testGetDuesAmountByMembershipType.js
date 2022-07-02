function testGetDuesAmountByMembershipTypeRunAll() {
    testGetDuesAmountByMembershipType1(true)
    testGetDuesAmountByMembershipType2('associate', true)
}

/**
 * Test Get Dues Amount By Membership Type
 * Test 1 : Membership type defaults to exhibiting
 * @param {boolean} verbose show messages
 * @returns {string} 
 */
function testGetDuesAmountByMembershipType1(verbose) {
    let amount = parseInt(getDuesAmountByMembershipType())
    let expected = 55 
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Amount = %s", t, amount)
    }

    return console.log((amount === expected) ? "test %s pass" : "test %s fail", t)
}

/**
 * Test Get Dues Amount By Membership Type
 * Test 2 : Membership type requested is associate
 * @param {boolean} verbose show messages
 * @returns {string} 
 */
 function testGetDuesAmountByMembershipType2(type, verbose) {
    let amount = parseInt(getDuesAmountByMembershipType(type))
    let expected = 45 
    let t = 2
    
    if (verbose) {
        console.log("Test %s: Amount = %s", t, amount)
    }

    return console.log((amount === expected) ? "test %s pass" : "test %s fail", t)
}
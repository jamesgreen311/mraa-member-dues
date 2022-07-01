function testGetPaymentMethodList1(verbose) {
    const list = getPaymentMethodList()
    let expected = 'array' 
    let t = 1
    
    if (verbose) {
        console.log("Test %s: List: %s ", t, list)
    }

    return console.log((typeof list === "object") && list.length>=0 ? "test %s pass" : "test %s fail", t)
}

function testGetPaymentMethodList2(expected, verbose) {
    const list = getPaymentMethodList()
    let t = 2
    
    if (verbose) {
        console.log("Test %s: List contains %s items. List values are %s ", t, list.length, list)
        console.log("Test %s: Expected contains %s items. Expected values are %s ", t, expected.length, expected)
    }

    let result = list.length === expected.length 
    let compare = list.every( ele => expected.includes(ele))
    return console.log( result ? "test %s pass" : "test %s fail", t)
}

function testGetPaymentMethodListRunAll() {
    testGetPaymentMethodList1(true)
    testGetPaymentMethodList2(['Cash', 'Check', 'PayPal', 'Awarded'], true)
}


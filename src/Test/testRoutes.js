function testRoutesRunAll() {
    testRoutes1("pending,active,inactive,removed,memoriam", true)
    testRoutes2("associate,exhibiting jury,exhibiting,honorary,memoriam", true)
    testRoutes3("cash,check,paypal,awarded", true)
    testRoutes4(45, true)
    testRoutes5(45, true)
}

function testRoutes1(expected, verbose) {
    let resp = route('statuslist').getContent().toLowerCase()
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Status List => %s ", t, resp)
    }

    return console.log((resp === expected.toLowerCase()) ? "Test %s pass" : "Test %s fail", t)
}

function testRoutes2(expected, verbose) {
    let resp = route('membershiptypelist').getContent().toLowerCase()
    let t = 2
    
    if (verbose) {
        console.log("Test %s: Membership Type List => %s ", t, resp)
    }

    return console.log((resp === expected.toLowerCase()) ? "Test %s pass" : "Test %s fail", t)
}

function testRoutes3(expected, verbose) {
    let resp = route('paymentmethodlist').getContent().toLowerCase()
    let respArray = resp.split()
    let t = 3
    
    if (verbose) {
        console.log("Test %s: Payment Method List => %s ", t, resp)
        console.log("  Response Array => %s ", respArray)
    }

    return console.log((resp === expected.toLowerCase()) ? "Test %s pass" : "Test %s fail", t)
}

function testRoutes4(expected, verbose) {
    let resp = parseInt(route('duesforexhibiting').getContent())
    let t = 4
    
    if (verbose) {
        console.log("Test %s: Dues For Exhibiting => %s ", t, resp)
    }

    return console.log((resp === expected) ? "Test %s pass" : "Test %s fail", t)
}

function testRoutes5(expected, verbose) {
    let resp = parseInt(route('duesforassociate').getContent())
    let t = 5
    
    if (verbose) {
        console.log("Test %s: Dues For Associate => %s ", t, resp)
    }

    return console.log((resp === expected) ? "Test %s pass" : "Test %s fail", t)
}
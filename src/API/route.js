const ROUTES = {
    path : function (r, callback) {
        ROUTES[r] = callback
    }
}
ROUTES.path("statuslist", getStatusListResponse)
ROUTES.path("membershiptypelist", getMembershipTypeListResponse)
ROUTES.path("paymentmethodlist", getPaymentMethodListResponse)
ROUTES.path("duesforexhibiting", getDuesForExhibitingResponse)
ROUTES.path("duesforassociate", getDuesForAssociateResponse)
ROUTES.path("duesforexhibiting", getDuesForExhibitingResponse)

function doGet(e) {
    let result = route('get', e.parameter['q'])
    return respond(JSON.stringify(result, 0, 2))
}

function doPost(e) {
    let result = route('post', e.parameter['q'])
}

function respond(response) {
    return ContentService
        .createTextOutput(response)
        .setMimeType(ContentService.MimeType.JSON)
}

function route(path) {
    return respond(ROUTES[path]())
}

function getStatusListResponse() {
    return getStatusList()
}

function getMembershipTypeListResponse() {
    return getMembershipTypeList()
}

function getPaymentMethodListResponse(){
    return getPaymentMethodList()
}

function getDuesForExhibitingResponse() {
    return getDuesAmountByMembershipType('exhibiting')
}

function getDuesForAssociateResponse() {
    return getDuesAmountByMembershipType('associate')
}
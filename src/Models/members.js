const MEMBERS_DB = connect(MEMBERSHIP_ID)
const M_TABLES = {
    "directory" : "Member Directory",
    "settings" : "Configuration"
}

const DIRECTORY_FIELDS_MAP = {
    "email" : 1,
    "first-name" : 2,
    "last-name" : 3,
    "preferred-name" : 4,
    "status" : 5,
    "street-address" : 6,
    "street-address-2" : 7,
    "city" : 8,
    "state" : 9,
    "zip" : 10,
    "contact-number-1" : 11,
    "contact-number-2" : 12,
    "membership-type" : 13,
    "jury-date" : 14,
    "medium" : 15,
    "artist-signature" : 16,
    "business-name" : 17,
    "comments" : 18
}

const M_SETTINGS_FIELDS_MAP = {
    "status-list" : "a2:a",
    "membership-type-list" : "c2:c",
    "medium" : "f2:f"
}

const M_SETTINGS_TABLE_NAME = M_TABLES.settings
const M_SETTINGS_TABLE = MEMBERS_DB.getSheetByName(M_SETTINGS_TABLE_NAME)

function getStatusList() {
    let list = M_SETTINGS_TABLE
        .getRange(M_SETTINGS_FIELDS_MAP["status-list"]+M_SETTINGS_TABLE.getLastRow())
        .getDisplayValues()
    list = list.map(l => l[0]) // convert from [][] to []
    return list.filter(l => l!=="") // remove empty array elements
}
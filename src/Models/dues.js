const DUES_DB = connect(MEMBER_DUES_ID)
const MD_TABLES = {
    "payments" : "Payments",
    "history" : "Payment History",
    "settings" : "Settings"
}

const PAYMENT_FIELDS_MAP = {
    "email" : 1,
    "data-paid" : 2,
    "amount-paid" : 3,
    "expires-date" : 4,
    "payment-method" : 5,
    "comments" : 6
}

const HISTORY_FIELDS_MAP = {
    "email" : 1,
    "data-paid" : 2,
    "amount-paid" : 3,
    "expires-date" : 4,
    "payment-method" : 5,
    "comments" : 6
}

const MD_SETTINGS_FIELDS_MAP = {
    "payment-method-list" : "a2:a4",
    "dues-by-membership" : {
        "exhibiting" : "c2",
        "associate" : "c3",
        "honorary" : "c4"
    },
    "paypal-transaction-fee" : "d2",
    "dues-begin-date" : "e2",
    "dues-end-date" : "f2"
}
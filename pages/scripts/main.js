function main() {
    document.addEventListener('DOMContentLoaded', () => {
        showEndpoint(document.getElementById('root'))
    })

    getStatusList()
    getDuesForExhibiting()
    getDuesForAssociate()
}

function showEndpoint(root) {
    root.append(ENDPOINT)
}

function showDues(dom, dues) {
    let ele = document.createElement("div")
    ele.innerHTML = dues
    dom.append(ele)
}

function showStatusList(dom, list) {
    let ele = document.createElement("div")
    ele.innerHTML = list
    dom.append(ele)
}

function getStatusList() {
    const url = ENDPOINT + "statuslist"
    fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            statuslist = Object.values(resp)
            showStatusList(root, statuslist)
        })
        .catch()
}

function getDuesForExhibiting() {
    const url = ENDPOINT + "duesforexhibiting"

    fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            showDues(root, `Exhibiting Dues: ${resp}`)
        })
        .catch()
}

function getDuesForAssociate() {
    const url = ENDPOINT + "duesforassociate"

    fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            showDues(root, `Associate Dues: ${resp}`)
        })
        .catch()
}
main()
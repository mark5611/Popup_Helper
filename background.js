browser.menus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId === "Helper"){
            console.log("called Helper")
            browser.tabs.sendMessage(tab.id, {
            action: "processSelection",
            text: info.selectionText,
            sentArchive: getFromStorage()
        }).catch(err => {
            console.log("No content script:", err.message);
        });
    }
    if(info.menuItemId === "Load"){
        let popupURL = browser.extension.getURL("loader.html");

        let creating = browser.windows.create({
            url: popupURL,
            type: "popup",
            height: 200,
            width: 700,
        });
    }

});


function getFromStorage(){
    let storageDataLength = window.localStorage.length
    let tempArchive = {}
    for (let i = 0; i < storageDataLength; i++) {
        let line = window.localStorage.getItem(i.toString())
        if(line.includes(":")) {
            let partedLine = line.split(":")
            tempArchive[partedLine[0]] = partedLine[1]
        }
    }
    return tempArchive
}

//create helper
browser.menus.create({
    id: "Helper",
    title: "Help",
    contexts: ["selection"]
});

//create loader
browser.menus.create({
    id: "Load",
    title: "loader",
    contexts: ["page"]
});




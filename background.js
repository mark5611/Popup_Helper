
browser.menus.onClicked.addListener(function(info, tab) {

    browser.tabs.sendMessage(tab.id, {
        action: "processSelection",
        text: info.selectionText
    }).catch(err => {
        console.log("No content script:", err.message);
    });
});

browser.menus.create({
    id: "helper",
    title: "Help",
    contexts: ["selection"]
});




console.log("Background starting");

browser.menus.onClicked.addListener(function(info, tab) {
    console.log("Helper activated");

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
}, function() {
    console.log("Menu created successfully");
});



console.log("Background fully loaded");

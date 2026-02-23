function readArchive(file){
    let Archive = []
    fetch('Archive.txt')
        .then((resp) => resp.text())
        .then(text => {
            for (let i = 0; i < text.length; i++) {
                let current_text = text[i]
                if (current_text !== "\n") {
                    Archive.push({"content": current_text})
                }
            }
        })
        .catch(e => console.log(e))
    return Archive
}

browser.menus.onClicked.addListener(function(info, tab) {

    browser.tabs.sendMessage(tab.id, {
        action: "processSelection",
        text: info.selectionText
    }).catch(err => {
        console.log("No content script:", err.message);
    });
});

browser.menus.create({
    id: "Helper",
    title: "Help",
    contexts: ["selection"]
});




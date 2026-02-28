let Archive = []

//read the provided file
async function readArchive(file) {
    let broken_down = [];
    try {
        const resp = await fetch('Archive.txt');
        const text = (await resp.text()).split("\n");
        for(let txt in text){
            broken_down.push(text[txt])
        }
        return broken_down;
    } catch (error) {
        console.error("Fetch failed:", error);
        return broken_down;
    }
}


readArchive('Archive.txt').then(broken_down => {
    Archive = broken_down
}).catch(error => {
    console.error("Error:", error);
});


browser.menus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId === "Helper"){
            console.log("called Helper")
            browser.tabs.sendMessage(tab.id, {
            action: "processSelection",
            text: info.selectionText,
            Archive_data: Archive
        }).catch(err => {
            console.log("No content script:", err.message);
        });
    }
    if(info.menuItemId === "Load"){
        let popupURL = browser.extension.getURL("loader.html");

        let creating = browser.windows.create({
            url: popupURL,
            type: "popup",
            height: 1000,
            width: 700,
        });
    }

});


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




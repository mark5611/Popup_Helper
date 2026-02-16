console.log("content.js loaded");

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "processSelection") {
        //readHighlightedText("selection: " + request.text);
        sendResponse({status: "done"});
    }
    if (request.action === "processSearchRequest"){
        readHighlightedText("initiated search");
        sendResponse({status: "done"});
    }
    return true;
});

function readHighlightedText(text) {
    window.alert(text)
}

function performSearch(text){

}

import {Archive} from "./background"

const Archive = "ca"

console.log(Archive)

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "processSelection") {
        let answer = search(request.text.toLowerCase());
        if (answer !== undefined){
            sendAnswerToUser(answer);
        }else{
            sendAnswerToUser("N/A")
        }
        sendResponse({status: "done"});
    }
    return true;
});

//browser notification.

function sendAnswerToUser(text) {
    window.alert(text);
}

//system level notification.
/*
function sendAnswerToUser(text){
    Notification.requestPermission().then(() => {
        let notification = new Notification(text);
    })
}*/


function search(query){
    if (Archive.filter(doc => doc.content.toLowerCase().includes(query))[0] !== undefined){
        return Archive.filter(doc => doc.content.toLowerCase().includes(query))[0]["content"];
    }
}


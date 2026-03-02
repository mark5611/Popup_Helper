let Archive = []
browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action === "processSelection") {

        Archive = []
        let requestArchive = request.sentArchive
        parseArchive(requestArchive)

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

function parseArchive(archive){
    for (let i = 0; i < archive.length; i++) {
        Archive.push({"content": archive[i]})
    }
    console.log(Archive)
}


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

let Archive = {}
browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action === "processSelection") {

        Archive = request.sentArchive
        console.log(Archive)

        let answer = search(request.text.toLowerCase());

        if (typeof(answer) === "string"){
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
    if (Object.keys(Archive).includes(query)){
        return Archive[query];
    }else{
        return undefined
    }
}

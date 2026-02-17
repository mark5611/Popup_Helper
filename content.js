
const Archive =[
    {"content": "complex numbers: real part 'a' and an imaginary part 'b*i'"},
    {"content": "Binomial Coefficient: choose k from n, disregard order"},
    {"content": "Surjectivity: at least one correct answer"},
    {"content": "Injectivity: at most one correct answer"},
    {"content": "Eigenvalue: scalar * non-zero eigenvector == non-zero eigenvector * matrix A"},
    {"content": "Powerset: set of all possible subsets"},
    {"content": "congruent modulo: divides a-b"},
    {"content": "reflexive: dots along the main diagonal"},
    {"content": "transitive//Associativity: aRb & bRc => aRc"},
    {"content": "equivalence relation: reflexive & symmetric & transitive"},
    {"content": "bijective: exactly one answer"},
    {"content": "Commutativity: a◦b = b◦a"},
    {"content": "Abelian Group: associative, neutral, inverse, commutative"},
    {"content": "generator: every vector can be a linear combination"},
    {"content": "basis: subset both generator and linearly independent"},
    {"content": "kernel: set of all vectors mapped to the 0 vector"},
    {"content": "image: all outputs where 'a' comes from the domain V"},
]

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

//browser notification

function sendAnswerToUser(text) {
    window.alert(text);
}

//system level notification
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


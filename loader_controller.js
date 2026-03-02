let fileContent = "asd"
document.addEventListener("DOMContentLoaded", () => {

    const elem = document.getElementById("file")
    const done = document.getElementById("done")

    elem.addEventListener('change', getFile)


});

function clearStorage(){
    window.localStorage.clear()
}

function parseFileContent(content){
    let parse = content.split("\n")
    for (let i = 0; i < parse.length; i++) {
        window.localStorage.setItem(i.toString(), parse[i])
    }
}

function getFile(event) {
    const input = event.target
    if ('files' in input && input.files.length > 0) {
        let file = input.files[0]
        readFileContent(file).then(content => {
            clearStorage()
            fileContent = content
            parseFileContent(fileContent)
        })
    }
}

function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
    })
}
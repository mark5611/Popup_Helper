document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("addBtn")

    if (btn !== undefined && btn !== null && btn) {

        btn.addEventListener("click", () => {
            getText()
        })
    }
})


function getText(){
    import("fs").then((fs) => {
        const outputFilePath = './Archive.txt';
        fs.writeFileSync(outputFilePath, "Hello, World!\nThis is a new line of text.\n", 'utf-8');
        console.log(`Text written to ${outputFilePath} using 'w' mode.`);
    })


    let textarea = document.getElementById("inputArea")
    let txt = textarea.value
    textarea.value = ""
}
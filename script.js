
const notesContainer = document.querySelector(".noteslist");
const createBtn = document.querySelector(".newNotes");

let notes = document.querySelector(".note1");
showNotes();
createBtn.addEventListener("click", () => {
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("note");
    let inputBox = document.createElement("p");
    inputBox.classList.add("note1");
    inputBox.className = "note1";
    inputBox.setAttribute("contenteditable", "true");
    let img = document.createElement("img");
    img.src = "delete.png"
    img.classList.add("img1");
    parentDiv.appendChild(inputBox);
    parentDiv.appendChild(img);

    notesContainer.appendChild(parentDiv);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".note1");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
})

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("note1");
}


function updateStorage(){
    localStorage.setItem("note1", notesContainer.innerHTML);
}

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBrake")
        event.note1();
    }
})
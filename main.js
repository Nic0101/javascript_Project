// console.log("nick");
show();
let adb = document.getElementById("addBtn");
adb.addEventListener("click", function (e) {
    let adt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(notes);
    }
    obj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(obj));
    addTxt.value = "";
    // console.log(obj);
    show();
});

function show() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(notes);
    }

    let html = "";
    obj.forEach(function (ele, index) {
        html += `
                    <div class="box">
                        <h5 class="Heading">Note ${index + 1}</h5>
                        <p> ${ele}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                    </div>
                `;
    });

    let notesele = document.getElementById("notes");
    if (obj.length != 0) {
        notesele.innerHTML = html;
    }
    else {
        notesele.innerHTML = "Empty Notes";
    }

}
function deleteNote(index) {
    // console.log("I am deleting",index+1);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(notes);
    }

    obj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(obj));

    show()

};


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('box');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
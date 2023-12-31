let form = document.querySelector("form");
let fruits = document.querySelector(".fruits");
form.addEventListener("submit" , function(event) {
    let editbutton = document.createElement("button");
    editbutton.className = "edit-btn";
    let editText = document.createTextNode("Edit");
    editbutton.appendChild(editText);
    event.preventDefault();
    let inputText = document.getElementById("fruit-to-add");
    let Newli = document.createElement("li");
    let NewLiText = document.createTextNode(inputText.value);
    Newli.appendChild(NewLiText);
    Newli.className = "fruit";
    let newbtn = document.createElement("button");
    let btnText = document.createTextNode("x");
    newbtn.appendChild(btnText);
    newbtn.className = "delete-btn";
    Newli.appendChild(newbtn);
    Newli.appendChild(editbutton);
    fruits.appendChild(Newli);
})
fruits.addEventListener("click" , function(event){
    if(event.target.classList.contains("delete-btn")){
        let ftd = event.target.parentElement;
        fruits.removeChild(ftd);
    };
})
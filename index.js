let c = 0; 
let ul = document.querySelector("ul");
function handleFormSubmit(event){
    c++;
    event.preventDefault();
    let li = document.createElement("li");
    let ExpAmount = event.target.exp.value;
    let ExpDes = event.target.Des.value;
    let ExpCat = event.target.Cat.value;
    
    let Expense = {
        ExpAmount : ExpAmount,
        ExpDes : ExpDes,
        ExpCat : ExpCat
    };
    localStorage.setItem(`Expense ${c}`, JSON.stringify(Expense));
    li.innerHTML = ` ${ExpAmount} - ${ExpDes} - ${ExpCat} ` + `<button onclick = "de(event , ${c})"> Delete </button><button onclick = "ed(event , ${c})"> Edit </button>`;
    li.id = `${c}`;
    ul.appendChild(li);
}
function de(event , c) {
    localStorage.removeItem(`Expense ${c}`);
    let l = document.getElementById(`${c}`);
    ul.removeChild(l);
}
function ed(event , c) {
    let r = JSON.parse(localStorage.getItem(`Expense ${c}`));
    document.getElementById("exp").value = r.ExpAmount; 
    document.getElementById("Des").value = r.ExpDes;
    document.getElementById("Cat").value = r.ExpCat;
    localStorage.removeItem(`Expense ${c}`);
    let l = document.getElementById(`${c}`);
    ul.removeChild(l);
}

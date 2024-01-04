let c = 0;
let ul = document.querySelector("ul");
// creating an object and storing in local storage
function handleFormSubmit(event) {
  event.preventDefault();
  c++;
  let li = document.createElement("li");
  let username  = document.getElementById("username").value;
  let email  = document.getElementById("email").value;
  let phone  = document.getElementById("phone").value;
  let obj = {
    username : username,
    email : email,
    phone : phone
  }
 
  li.id = `${c}`;
  li.innerHTML =  `${username} + ${email} + ${phone} ` + `<button onclick = "de(event)" id = ${c} > Delete </button>`;
  localStorage.setItem(`User Details ${c}`,JSON.stringify(obj));
  adding(li);
}
// deleting the user details
function de(event) {
  let lis = document.querySelectorAll("li");
  for (let i = 0; i < lis.length; i++) {
    if(event.target.id === lis[i].id){
      ul.removeChild(lis[i]);
      localStorage.removeItem(`User Details ${lis[i].id}`);
    }
  } 
}
// display user details
function adding(li){
  ul.appendChild(li);
}
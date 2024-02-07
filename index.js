let c ;
let ul = document.querySelector("ul");
const url = 'https://crudcrud.com/api/9847ba7fbf3544628db3499aa50739f5/UserDetails' ;

// creating an object
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
  axios
  .post(url,obj)
  .then(res => {
    c = res.data._id;
    li.id = `${c}`;
  });
  li.innerHTML =  `${username} + ${email} + ${phone} ` + `<button onclick = "de(event)"> Delete </button>      <button onclick = "del(event)" id = ${c} > Edit </button>` ;
  adding(li);
}



// deleting the user details
function de(event) {
  let liId = event.target.parentNode.id;
  axios
  .delete(`${url}/`+`${liId}`)
  .then(ul.removeChild(event.target.parentNode));
}

// edit
function del(event) {
  let liId = event.target.parentNode.id;
  axios
  .get(`${url}/`+`${liId}`)
  .then(res => {
    document.getElementById("username").value = res.data.username;
    document.getElementById("email").value = res.data.email;
    document.getElementById("phone").value = res.data.phone;
  })
  axios
  .delete(`${url}/${liId}`)
  .then(ul.removeChild(event.target.parentNode));
}



// display user details
function adding(li){
  ul.appendChild(li);
}

// clearing the servers data
function dd() {
  axios
  .get(url)
  .then(res => {
    for (let i = 0; i < res.data.length; i++) {
      axios
      .delete(`${url}/${res.data[i]._id}`)
      .then(res => console.log(res))
    }
  })

}


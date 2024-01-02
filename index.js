let form = document.addEventListener("submit" , function(event) {
  event.preventDefault();
  localStorage.setItem("username" , document.getElementById("username").value )
  localStorage.setItem("email" , document.getElementById("email").value )
  localStorage.setItem("phone" , document.getElementById("phone").value )
})
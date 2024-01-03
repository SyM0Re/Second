let c = 0;
let li = document.createElement("li");
function handleFormSubmit(event) {
    c++;
    event.preventDefault();
    // Get user details from the form fields
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
  
    // Create an object with user details
    const userDetails = {
      username: username,
      email: email,
      phone: phone,
    };
  
    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem(`User Details ${c}`, JSON.stringify(userDetails)); 
    li.innerHTML = JSON.stringify(userDetails);
    document.querySelector(".list").appendChild(li);
  }
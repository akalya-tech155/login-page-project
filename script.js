function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("message");

  if (user === "" || pass === "") {
    msg.innerText = "Please fill all fields!";
    msg.style.color = "red";
  } else {
    msg.innerText = "Login Successful!";
    msg.style.color = "green";
  }
}


/*   added more information */

function validate() {
  alert("Form submitted!");
}

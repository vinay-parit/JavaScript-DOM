let form = document.querySelector("form")
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function(dets){
  dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";


  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;

  let emailans = emailRegex.test(email.value)
  let passwordans = emailRegex.test(password.value);

  if (!emailans) {
    document.querySelector("#emailError").textContent = "Email is incorrect"
    document.querySelector("#emailError").style.display = "initial";


  }

  if (!passwordans) {
    document.querySelector("#passwordError").textContent = "Password is incorrect";
    document.querySelector("#passwordError").style.display = "initial";

  }

})
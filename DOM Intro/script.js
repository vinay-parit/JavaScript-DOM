let form = document.querySelector("form")
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function(dets){
  dets.preventDefault();

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
   
})
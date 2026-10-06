// let a = document.querySelector("a")
// a.style.textDecoration = "none"
// a.style.color = "red"

// const { createElement } = require("react");

// a.setAttribute(
//   "href",
//   "https://images.unsplash.com/photo-1790122387967-ffecd6ab8e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
// );

// a.removeAttribute("href")

// let h1 = document.createElement("h1");
// h1.textContent = "Hi from vinay"

// document.querySelector("body").append(h1)

// let lis = document.querySelectorAll("li")

// lis.forEach(val => {
//     console.log(val.textContent);

// });

// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   h1.classList.toggle("abc")
// });

// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#inp")

// btn.addEventListener("click", function(){
//   fileinp.click()
// })

// fileinp.addEventListener("change", function(dets){
//   let file = dets.target.files[0]
//  btn.textContent = file.name
// })

// let select =  document.querySelector("select")
// let h3 = document.querySelector("h3")

// select.addEventListener("change", function(dets){
//   h3.textContent = `${dets.target.value} Device selected`
// })

// let h3 = document.querySelector("h3")

// window.addEventListener("keydown", function(dets){
//   if(dets.key === " "){
//     h3.textContent = "SPC"
//   }
//   else{
//     h3.textContent = dets.key
//   }
// })

// let form = document.querySelector("form")
// let inputs = document.querySelectorAll("input")
// let main = document.querySelector("#main")

// form.addEventListener("submit", function(dets){
//     dets.preventDefault()

//     let card = document.createElement("div")
//     card.classList.add("card")

//     let profile = document.createElement("div")
//     profile.classList.add("profile-pic");

//     let img = document.createElement("img")
//     img.setAttribute("src", inputs[0].value)

//     let h2 = document.createElement("h2");
//     h2.textContent = inputs[1].value

//     let h4 = document.createElement("h4");
//     h4.textContent = inputs[2].value

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value

//     profile.appendChild(img)
//     main.appendChild(card)
//     card.appendChild(profile);
//     card.appendChild(h2)
//     card.appendChild(h4)
//     card.appendChild(p)

//     inputs.forEach(function(inp){
//         if(inp.type !== "submit"){
//             inp.value = ""
//         }
//     })
// });

// let abcd = document.querySelector ("#abcd")

// window.addEventListener("mousemove", function(dets){

//     abcd.style.top = dets.clientY + "px"
//     abcd.style.left = dets.clientX + "px"

// })

// 8. Build a tourist car billing system with these rates:
//    - Maruti (≤ 100 km): ₹800 + ₹100 driver fee
//    - Maruti (101–200 km): ₹800 + ₹10/km (above 100) + ₹300 driver fee//    - Maruti (> 200 km): ₹15/km + ₹500 driver fee
//    - Sumo (≤ 100 km): ₹600 + ₹100 driver fee
//    - Sumo (101–200 km): ₹600 + ₹8/km (above 100) + ₹300 driver fee
//    - Sumo (> 200 km): ₹12/km + ₹500 driver fee

// let car = prompt("Select your car");
// let range = Number(prompt("Enter the kilometer"));
// let total;

// if (car === "maruti") {
//   if (range <= 100) {
//     total = 800 + 100;
//   } else if (range <= 200) {
//     total = 800 + (range - 100) * 10 + 300;
//   } else {
//     total = range * 15 + 500;
//   }
//   console.log(total)

// } else if (car === "sumo") {
//   if (range <= 100) {
//     total = 600 + 100;
//   } else if (range <= 200) {
//     total = 600 + (range - 100) * 8 + 300;
//   } else{
//     total = range * 12 + 500;
//   }
//   console.log(total);
// }

// let ul = document.querySelector("ul")

// ul.addEventListener("click", function(dets){
//   dets.target.classList.toggle("lt")
// })

// let inp = document.querySelector("input")
// let span = document.querySelector("span")

// inp.addEventListener("input", function(dets){
//   let count = 20
//   span.textContent = count - inp.value.length

//     if(inp.value.length > 20){
//       span.style.color = "red"
//     }
//     else{
//       span.style.color = "black"
//     }
// })

// let form = document.querySelector("form");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");

// form.addEventListener("submit", function (dets) {
//   dets.preventDefault();

//   document.querySelector("#emailError").textContent = " "; 
//   document.querySelector("#passwordError").textContent = " "; 

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

//   let emailans = emailRegex.test(email.value);
//   let passans = passwordRegex.test(password.value)

//   let isvalid = true

//   if(!emailans){
//     document.querySelector("#emailError").textContent = "Invalid Email" 
//     isvalid = false
//   }

//   if(!passans){
//     document.querySelector("#passwordError").textContent = "Invalid Password"; 
//     isvalid = false
//   }

//   if(isvalid){
    
//     document.querySelector("#successMessage").textContent =
//       "Everything is Correct";
//   }

// });

// let count = 0
// let Progress = document.querySelector(".progress-fill");
// let perc = document.querySelector(".download-percentage");

// let setint = setInterval(function(){
//   if (count<=99){
//     count++;
//     Progress.style.width = `${count}%`
//     perc.textContent = `${count}%`
//   }
//   else{
//     document.querySelector(".download-status").textContent = "Downloaded"
//     clearInterval(setint)
//   }
// },1000/100)

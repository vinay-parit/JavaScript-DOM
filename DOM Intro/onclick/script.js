// let btn = document.querySelector("#btn")
// let inp = document.querySelector("input")

// btn.addEventListener("click", function(){
// inp.click()
// })

// inp.addEventListener("change", function(det){
// // console.log(det.target.files[0].name);
// let name = det.target.files[0].name;
// if(name){
// btn.textContent = name;
// }
// })




let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let main = document.querySelector("#main")

form.addEventListener("submit", function(det){
det.preventDefault();
// console.log(inputs);

let card = document.createElement("div")
card.classList.add("card")

let profile = document.createElement("div")
profile.classList.add("profile");

let img = document.createElement("img")
img.setAttribute(
  "src", inputs[0].value 
);

let h3 = document.createElement("h3")
h3.textContent = inputs[1].value
let h5 = document.createElement("h5")
h5.textContent = inputs[2].value
let p = document.createElement("p")
p.textContent = inputs[3].value

profile.appendChild(img);
card.appendChild(profile);
card.appendChild(h3)
card.appendChild(h5)
card.appendChild(p)

main.appendChild(card)

inputs.forEach(function(inp){
    if(inp.type !== "submit")
        inp.value = ""
})

})
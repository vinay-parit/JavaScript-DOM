let head = document.querySelector(".head");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function (simmy) {
  console.log("Clicked element:", simmy.target.tagName);
  console.log("Click coordinates:", simmy.clientX, simmy.clientY);
  console.log("EVENT type:", simmy.type);
  head.textContent = "Vinay.Riya";
});


window.addEventListener("resize", function () {
  console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);
});

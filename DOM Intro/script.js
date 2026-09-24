let a = document.querySelector("a")
a.style.textDecoration = "none"
a.style.color = "red"

a.setAttribute(
  "href",
  "https://images.unsplash.com/photo-1790122387967-ffecd6ab8e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
);

a.removeAttribute("href")


let h1 = document.createElement("h1");
h1.textContent = "Hi from vinay"

document.querySelector("body").append(h1)
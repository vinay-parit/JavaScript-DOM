// let grandParent = document.querySelector(".grand-parent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");
// let body = document.querySelector("body");

// body.addEventListener("click", () => {
//   console.log("Hello from body");
// });

// grandParent.addEventListener("click", () => {
//   console.log("Hello from grandParent");
// });
// parent.addEventListener("click", () => {
//   console.log("Hello from Parent");
// });

// child.addEventListener("click", (event) => {
//   console.log("Hello from child");
//   event.stopPropagation();
// });

// //this is used to stop event bubbling
// //event.stopPropagation()


// document.getElementById('parent').addEventListener('click', function() {
//     console.log('Parent clicked (capturing)');
// }, true); // Enable capturing phase

// document.getElementById('child').addEventListener('click', function() {
//     console.log('Child clicked');
// });



const todoList = document.getElementById('todoList');

todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
        console.log('Todo item deleted');
    }
});


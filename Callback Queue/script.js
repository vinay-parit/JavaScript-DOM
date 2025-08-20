// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Alice", sayBye);

// console.log("Start");

// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//       setTimeout(() => {
//         console.log("Step 4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.log("App started");

// setTimeout(() => {
//   console.log("Connecting to database...");

//   setTimeout(() => {
//     console.log("Fetching user data...");

//     setTimeout(() => {
//       console.log("User data fetched");

//       setTimeout(() => {
//         console.log("Processing data...");

//         setTimeout(() => {
//           console.log("Data processed");

//           setTimeout(() => {
//             console.log("Saving data...");

//             setTimeout(() => {
//               console.log("Data saved successfully!");

//               setTimeout(() => {
//                 console.log("Sending confirmation email...");

//                 setTimeout(() => {
//                   console.log("Email sent. All operations completed.");
//                 }, 1000);
//               }, 4000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);




// loginUser("alice@email.com", function (loginError, user) {
//   if (loginError) {
//     console.error("Login failed:", loginError);
//     return;
//   }

//   getUserPosts(user.id, function (postsError, posts) {
//     if (postsError) {
//       console.error("Failed to get posts:", postsError);
//       return;
//     }

//     getComments(posts[0].id, function (commentsError, comments) {
//       if (commentsError) {
//         console.error("Failed to get comments:", commentsError);
//         return;
//       }

//       updateUserActivity(user.id, function (updateError, result) {
//         if (updateError) {
//           console.error("Failed to update activity:", updateError);
//           return;
//         }

//         console.log("All operations completed!");
//         console.log("Comments:", comments);
//         // This could go even deeper!
//       });
//     });
//   });
// });



setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("World");
  }, 1000);
}, 2000);



setTimeout(() => {
  console.log("Hello");
}, 2000);

setTimeout(() => {
  console.log("world");
}, 1000);



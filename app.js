const http = new easyHTTP();

// // Get Posts
// http.get(
//   "https://jsonplaceholder.typicode.com/posts",
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

// Get Single Post
// http.get(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Create Data
const data = {
  title: "Custom Post",
  body: "This is a custom post",
};

// Add Post
http.post(
  "https://jsonplaceholder.typicode.com/posts",
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);

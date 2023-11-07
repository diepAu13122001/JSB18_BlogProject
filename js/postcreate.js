// create posts
const data = [
  { title: "Breaking bad", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009" },
  { title: "Breaking news: the ottoman empire is defeated in the cursade of varna", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009" },
  { title: "Minor annoyence", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elitus, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009" },
  { title: "This is not a title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009"},
  { title: "This is a title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009" },
];

localStorage.setItem("postList", JSON.stringify(data));

function createPost() {
  // get input data
  const title = document.getElementById("Title").value;
  const content = document.getElementById("Content").value;
  const picture = document.getElementById("Picture").value;
  const curUsername = localStorage.getItem("curUser");
  // get current time
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const createdAt = hour + ":" + minute + " " + day + "/" + month + "/" + year;

  // add post in post list of LocalStorage
  let postList = JSON.parse(localStorage.getItem("postList"));
  postList.push({
    title: title,
    content: content,
    picture: picture,
    created_by: curUsername,
    created_at: createdAt,
  });

  // update data 
  localStorage.setItem("postList", JSON.stringify(postList));

  // back to post list
  window.location.href = "postlist.html";
}

// create posts
const data = [
  {
    title: "Breaking bad",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    picture:
      "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg",
    created_by: "Walter hartwell white",
    created_at: "9-11-2009",
  },
  {
    title:
      "Breaking news: the ottoman empire is defeated in the cursade of varna",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    picture:
      "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg",
    created_by: "Walter hartwell white",
    created_at: "9-11-2009",
  },
  {
    title: "Minor annoyence",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitus, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    picture:
      "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg",
    created_by: "Walter hartwell white",
    created_at: "9-11-2009",
  },
  {
    title: "This is not a title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    picture:
      "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg",
    created_by: "Walter hartwell white",
    created_at: "9-11-2009",
  },
  {
    title: "This is a title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    picture:
      "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg",
    created_by: "Walter hartwell white",
    created_at: "9-11-2009",
  },
];

localStorage.setItem("postList", JSON.stringify(data));
function getPost(title) {
  // get list from local storage (covert string to list by JSON.parse)
  let data = JSON.parse(localStorage.getItem("postList"));
  data.forEach((post) => {
    // find current post
    if (post.title == title) {
      // set var current post = post and save in local
      localStorage.setItem("curPost", JSON.stringify(post));
      // move post detail page
      // window.location.href = '../html/postdetail.html'
      return;
    }
  });
}

// add post in postdetail page
function setPostInformation() {
  // pro-code
  getPost("Minor annoyence");
  // get post detail = curPost
  let post = JSON.parse(localStorage.getItem("curPost"));

  // set author info
  document.getElementsByClassName("post-author")[0].innerHTML = post.created_by;
  document.getElementsByClassName("post-createdAt")[0].innerHTML =
    post.created_at;
  document.getElementsByClassName("post-title")[0].innerHTML = post.title;
  document.getElementsByClassName("post-details")[0].innerHTML = post.content;
  //set image link
  document.querySelector(".post-pic img").src = post.picture;
}

// execute function set post info
setPostInformation();

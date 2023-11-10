function getPost(title) {
  // get list from local storage (convert string -> list by JSON.parse)
  let data = JSON.parse(localStorage.getItem("postList"));
  data.forEach((post) => {
    // find the current post
    if (post.title == title) {
      // set var curPost = post and save in local
      console.log(post)
      localStorage.setItem("curPost", JSON.stringify(post));
    }
  });
  // move post detail page
  location.href = "../html/postdetail.html";
}

// add post in postdetail page
function setPostInformation() {
  // pro-code
  // getPost("Minor annoyence");
  // get post detail = curPost
  let post = JSON.parse(localStorage.getItem("curPost"));

  // set author information
  document.getElementsByClassName("post-author")[0].innerHTML = post.created_by;

  //set image link
  document.querySelector(".post-pic img").src = post.picture;

  
}

// execute function set post information
setPostInformation();

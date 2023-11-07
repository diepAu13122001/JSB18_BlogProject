function getPost(title) {
  // get list from local storage (convert string -> list by JSON.parse)
  let data = JSON.parse(localStorage.getItem("postList"));
  data.forEach((post) => {
    // find the current post
    if (post.title == title) {
      // set var curPost = post and save in local
      localStorage.setItem("curPost", post);
      // move post detail page
      window.location.href = "../html/postdetail.html";
      return;
    }
  });
}

// pro-code
// getPost('Minor annoyence');

// add post in postdetail page
function setPostInformation() {
  // get post detail = curPost
  let post = JSON.parse(localStorage.getItem("curPost"));

  // set author information
  document.getElementsByClassName("post-author")[0].innerHTML = post.created_by;

}

// execute function set post information
setPostInformation();

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
 
  // local save string -> convert string -> list by JSON.parse
  let postList = JSON.parse(localStorage.getItem("postList"));
 // add post in post list of LocalStorage 
  postList.push({
    title: title,
    content: content,
    picture: picture,
    created_by: curUsername,
    created_at: createdAt,
  });

  // update data (convert list -> string by JSON.stringify)
  localStorage.setItem("postList", JSON.stringify(postList));

  // back to post list
  window.location.href = "../html/postlist.html";
}

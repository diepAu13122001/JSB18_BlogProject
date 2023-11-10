// get list from local storage
const postList = JSON.parse(localStorage.getItem("postList"));

// get item from html
let list = "";

for (let index = 0; index < postList.length; index++) {
  // get detail of post
  const title = postList[index].title;
  const content = postList[index].content;
  const picture = postList[index].picture;

  // add data in html code
  list += `<div class="post">
    <img src="${picture}" class="card-img-top" alt="slide 1a">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${content}</p>
      <a href="#" class="btn btn-primary" onclick="getPost('${title}')">Continue reading</a>  
                 
</div>`;
}

document.getElementById("postlist").innerHTML = list;

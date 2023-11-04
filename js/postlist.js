// create posts
const data = [
    { title: "Breaking bad", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009" },
    { title: "Breaking news: the ottoman empire is defeated in the cursade of varna", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009" },
    { title: "Minor annoyence", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elitus, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009" },
    { title: "This is not a title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009"},
{ title: "This is a title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", picture: "https://nosomovo.xyz/wp-content/uploads/2019/10/hinh-anh-20-11-y-nghia-11.jpeg", created_by: "Walter hartwell white", created_at: "9-11-2009" },
  ];
  
localStorage.setItem("postList", data);

// get list from local storage
const postlist = localStorage.getItem("postList");

// get item from html
let list = "";

for (let index = 0; index < postlist.length; index++) {
    // get detail of post
    const title = postlist[index].title;
    const content = postlist[index].content;
    const picture = postlist[index].picture;

    // add data in html code
    list += ` <div class="post">
    <img src="${picture}" class="card-img-top" alt="slide 1a">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${content}</p>
      <a href="#" class="btn btn-primary">Continue reading</a>  
                 
</div> `;

}

document.getElementById("postlist").innerHTML = list;
// create posts
const data = [
  {
    title: "Breaking bad",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    picture:
      "https://statics.vinwonders.com/Vietnamese-Teacher's-Day-6_1697094301.jpg",
    created_by: "Walter hartwell white",
    created_at: "9-11-2009",
  },
  {
    title:
      "Breaking news: the ottoman empire is defeated in the cursade of varna",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    picture:
      "https://vietnamtimes.org.vn/stores/news_dataimages/thanhhavnt/112020/16/18/in_article/2246_teacher-3.jpg?rt=20201116200104",
    created_by: "Walter hartwell white",
    created_at: "9-11-2009",
  },
  {
    title: "Minor annoyence",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitus, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    picture:
      "https://i0.wp.com/vietnaminsider.vn/wp-content/uploads/2019/11/Happy-teacher-day.jpg?fit=759%2C422&ssl=1",
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

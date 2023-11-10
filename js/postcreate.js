function createPost(){
    const title = document.getElementById("Title").Value;
    const content = document.getElementById("Content").Value;
    const picture = document.getElementById("Picture").Value;
    const curUsername = localStorage.getElementById("curUser");
    const now = new Date();
    const day = now.getDay;
    const month = now.getMonth;
    const year = now.getFullYear;
    const hour = now.getHours;
    const minute = now.getMinutes;

    const createdAt = hour + ":" + minute + " " + day + "/" + month + "/"+ year;

    let postList = JSON.parse(localStorage.getItem("postList"));
    postList.push({    
    title:title,
    content: content,
    picture: picture,
    created_by: curUsername,
    created_at: createdAt,
})

//List to string (real)
localStorage.setItem("postList", JSON.stringify(postList));

window.location.href = "../html/postlist.html";
}
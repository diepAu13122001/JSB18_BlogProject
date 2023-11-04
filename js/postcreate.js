function createPost(){
    const title = document.getElementById("Title").Value;
    const content = document.getElementById("Content").Value;
    const picture = document.getElementById("Picture").Value;
    const curUsername = localStorage.getElementById("curUser").Value;
    const now = new Date();
    const day = now.getDay;
    const month = now.getMonth;
    const year = now.getFullYear;
    const hour = now.getHours;
    const minute = now.getMinutes;

    const createdAt = hour + ":" + minute + " " + day + "/" + month + "/"+ year;

    let postList = localStorage.getItem("postList")
    postList.add({    
    title:title,
    content: content,
    picture: picture,
    created_by: curUsername,
    created_at: createdAt,
})

}
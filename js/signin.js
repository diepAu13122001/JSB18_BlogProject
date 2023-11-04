
function checkUser() {

    // get input data
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    
    // check old user
    let user = localStorage.getItem(username);
    if(!user) {
        // create user 
        alert("You are a new member!");
        localStorage.setItem(username, password);
    } else  {
        // check password
        if (user != password) {
            alert("Your password is wrong!");
            document.getElementById("login-password").value = "";
        } else {
            alert("Successfully!");
            window.location.href = "../index.html";
        }
    }
}

function getUser () {
    
}
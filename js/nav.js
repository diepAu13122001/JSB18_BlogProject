function getUser() {
    // get username login before
    curUser = localStorage.getItem("curUser");

    // check if user had login in this web -> change by username
    if (curUser != null) {
      document.getElementById("signin").style = "text-transform: none;";
      document.getElementById("signin").innerHTML = curUser;
      document.getElementById("signin").addEventListener("click", (e) => {
        // no move by link in a tab
        e.preventDefault();
      });
    } else {
      document.getElementById("signin").style = "text-transform: uppercase;";
      document.getElementById("signin").innerHTML = "login";
    }
  }

  getUser();
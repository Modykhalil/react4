function formvalidate() {
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = "";

    if (userName.length < 3) {
        text = "Please enter a valid name";
        error.innerHTML = text;
        return false;
    } else if (email.indexOf("@") === -1) {
        text = "Please enter a valid Email";
        error.innerHTML = text;
        return false;
    } else if (password.length < 8) {
        text = "Please enter a valid password";
        error.innerHTML = text;
        return false;
    } else if (isNaN(phone)) {
        text = "Please enter a valid phone";
        error.innerHTML = text;
        return false;
    } else {
        alert("Done");
        
        // Redirect to another page after successful validation
        window.location.href = "login.html";
        
        return false; // Prevent form submission (optional, you can remove this if you want to submit the form)
    }
}

function formvalidate() {
   
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
 
    var error = document.getElementById("error");
    var text = "";

  
     if (email.indexOf("@") === -1) {
        text = "Please enter a valid Email";
        error.innerHTML = text;
        return false;
    } else if (password.length < 8) {
        text = "Please enter a valid password";
        error.innerHTML = text;
        return false;
  
    } else {
        alert("Done");
        
       
        window.location.href = "FaceBook-Clone--master/index.html";
        
        return false; 
    }
}

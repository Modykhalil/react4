function showtime() {
    var datetime = new Date();
    var hours =  datetime.getHours();
    var minutes = datetime.getMinutes();
    var seconds = datetime.getSeconds();
    var timezone="AM";


    if (hours == 0){
        hours=12;
    }
     if ( hours > 12){
        hours = hours-12;
        timezone="pm";
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds + "" + timezone ;
    
    document.getElementById("time").innerHTML=time;
    setTimeout(showtime,1000);


 

}
showtime();
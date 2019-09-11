var bootcampGraduation = new Date(" December 6 , 2019 17:30").getTime();
var countdown = setInterval(function() {

    var today = new Date().getTime();
    var t = bootcampGraduation - today;
    var days =(Math.floor (t / (1000 * 60 * 60 * 24)));
    var hours =(Math.floor ((t/(1000 * 60 * 60 )) % 24));
    var minutes =(Math.floor((t / 1000 / 60)% 60));
    var seconds =(Math.floor((t / (1000) % 60)));

    if (days <= 9) {
        days = "0" + days;
    }
    
    if (hours <= 9) {
        hours = "0" + hours;
    }

    if (minutes <= 9) {
        minutes = "0" + minutes;
    }

    if (seconds <= 9) {
        seconds = "0" + seconds;
    }

        document.getElementById("clock").innerHTML =days + ':' + hours + ':' + minutes + ':' + seconds;
    if (t < 0) {
        clearInterval (t);
        document.getElementById("clock").innerHTML ="We Did It!";
    }
    }, 1000);
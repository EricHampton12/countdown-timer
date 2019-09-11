var bootcampGraduation = new Date(" December 6 , 2019 17:30").getTime();
var countdown = setInterval(function() {

    var today = new Date().getTime();
    var t = bootcampGraduation - today;
    var days =correctNumbers(Math.floor (t / (1000 * 60 * 60 * 24)));
    var hours =correctNumbers(Math.floor ((t/(1000 * 60 * 60 )) % 24));
    var minutes =correctNumbers(Math.floor((t / 1000 / 60)% 60));
    var seconds =correctNumbers(Math.floor((t / (1000) % 60)));


    function correctNumbers(n){
        if(n < 10){
            return "0" + n;
        } else {
            return n;
        }
    }

    document.getElementById("clock").innerHTML =days + ':' + hours + ':' + minutes + ':' + seconds;
    if (t < 0) {
        clearInterval (t);
        document.getElementById("clock").innerHTML ="We Did It!";
    
        
    }
}, 1000);
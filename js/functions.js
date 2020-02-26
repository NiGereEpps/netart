//Source: https://www.webdeveloper.com/d/187992-do-something-if-hover-for-more-than-x-seconds/3
//Changes mouse click to wait for 1 second hover
function start(element)
{
    var timer = setTimeout("start_action()", 2000); //wait 1 second
    element.onmouseout = function() { clearTimeout(timer); } //remove timer
}

function start_action()
{
    window.location.href = "webvr.html";
}

var incontrol=false;

function control(element)
{
    var timer = setTimeout("control_action()", 2000); //wait 1 second
    element.onmouseout = function() { clearTimeout(timer); } //remove timer
}

function control_action()
{
    document.getElementById("control").remove();
    incontrol=true;
    $.get("https://ipinfo.io/json", function (response) {
                alert("Are you really in control? \nIt's already too late. We have everything that we need (hint: " + response.ip + "). \nThank you for your data");
            }, "jsonp");
    // Source: https://stackoverflow.com/a/17864552
}

//Countdown until start
var seconds=30;

var countdown = setInterval(function() {
    if(seconds == 0){
        clearInterval(countdown);
        window.location.href = "webvr.html";
    }

    if(!incontrol){
        if(seconds == 22)
            $.get("https://ipinfo.io/json", function (response) {
                prompt("We know you're in " + response.city + ", " + response.region + " right now. \nWe just want your email address");
                setTimeout(function(){  
                    prompt("Don't believe us? \nIs " + response.ip + " your IP address? \nYou may as well give us your email address too. \nThere's plenty of discounts and free products we can give you!");
                }, 2000);
            }, "jsonp");

        // Source: https://stackoverflow.com/a/17864552

        if(seconds == 29)
            prompt('Enter your email address and sign up for rewards!');

        if(seconds == 25)
            confirm('New weight loss supplement! Learn more?');

        if(seconds == 20)
            alert('You have 5 new friend requests!');

        if(seconds == 15)
            confirm('Are you a student? Win a free laptop for school!');

        if(seconds == 10)
            prompt('Your data has been breached! \nEnter your phone number to get a recovery code!');

        if(seconds == 5)
            alert('Get ready to experience VR!');

        if(seconds == 2)
            prompt('Last chance to enter your email, rewards are just a click away!');
    }
    

    document.getElementById("countdown").innerHTML = 
        "Starting in " + seconds + " seconds"

    seconds--;
 
}, 1000);
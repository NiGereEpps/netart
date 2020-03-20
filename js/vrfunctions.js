function finish(){
    window.location.href = "gallery.html"
}

function restart(){
    window.location.href = "../index.html"
}

function openPage(page){
    if (sessionStorage.viewmode == 'true') { //if statement not needed
        window.open('webvr' + page + '.html', '_blank');   
    }
}

function changePage(page){
    if (sessionStorage.viewmode != 'true') { // == 'false'
        setTimeout(function(){window.location.href = 'webvr' + page + '.html'}
            , 30*1000);
    }
}
   

//onclick to switch page and start timer
AFRAME.registerComponent('start-scenes', {

    init: function () {
      
        var el = this.el; 

        el.addEventListener('click', function () {
            window.location.href = 'webvr2.html';
        });
    }
  });

AFRAME.registerComponent('countdown', {
    init: function () {

        var el = this.el;
        var seconds = 30;

        var countdown = setInterval(function() {
            el.setAttribute("value", seconds);
            seconds--;

            if(seconds == 0){
                clearInterval(countdown);
            }
        }, 1000);       
         

    }
       
});

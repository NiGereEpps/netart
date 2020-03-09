/*
var page=3;

function nextPage () {
    window.location.href = 'webvr' + page + '.html';
    page++;
}
*/

function page3 () {
    window.location.href = 'webvr3.html'
}

function page4 () {
    window.location.href = 'webvr4.html'
}

function finish(){
    window.location.href = "statement.html"
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

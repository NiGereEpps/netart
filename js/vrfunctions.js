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


AFRAME.registerComponent('start-scenes', {

    init: function () {
      
      var el = this.el;  // <a-box>
      
      el.addEventListener('click', function () {
        window.location.href = 'webvr2.html';
        //setInterval(nextPage, 5000);
      });

    
    }
  });

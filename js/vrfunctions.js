var page = 3;

function nextPage () {
    window.location.href = 'webvr' + page + '.html'
    page++;
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

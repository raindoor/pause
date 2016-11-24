var checkScrollSpeed = (function(settings){
    settings = settings || {};

    var lastPos, newPos, timer, delta,
        delay = settings.delay || 100; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();

// listen to "scroll" event
var prevSpeed = 0;
window.onscroll = function(){
  var curSpeed = (checkScrollSpeed() + prevSpeed) / 2;
  prevSpeed = curSpeed;
  $('section').css('-webkit-transform','skewY('+(curSpeed/30)+'deg)');
};

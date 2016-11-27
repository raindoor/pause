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
var maxVal = 100;
window.onscroll = function(){
  var curSpeed = (checkScrollSpeed()*0.1 + prevSpeed*0.9);
  // var curSpeed = (checkScrollSpeed() + prevSpeed) / 2;
  prevSpeed = curSpeed;
  if(curSpeed > maxVal) curSpeed = maxVal;
  else if(curSpeed < -1*maxVal) curSpeed = -1*maxVal;
  $('.cine').css('-webkit-transform','skewY('+(curSpeed/5)+'deg)');
  $('.cine pre').css('-webkit-transform','skewY('+(-1*curSpeed/5)+'deg)');
  $('.cine span').css('-webkit-transform','skewY('+(-1*curSpeed/5)+'deg)');
};

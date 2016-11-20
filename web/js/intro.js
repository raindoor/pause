// Agency Theme JavaScript
var cnt = 1;
(function($) {
  setInterval(changeIntroWord , 1000);

})(jQuery); // End of use strict

function changeIntroWord(){
  $('.wordContainer h1').hide();
  $('.wordContainer .word'+(cnt+1)).show();
  cnt = (cnt+1)%3;
}

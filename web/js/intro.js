// Agency Theme JavaScript
var cnt = 1;
var redirectCnt = 0;
var changeTimer;
(function($) {
  changeTimer = setInterval(changeIntroWord , 1000);

})(jQuery); // End of use strict

function changeIntroWord(){
  if(redirectCnt == 5){
    clearInterval(changeTimer);
    showIntro2();
    return;
  }
  $('.wordContainer h1').hide();
  $('.wordContainer .word'+(cnt+1)).show();
  cnt = (cnt+1)%3;
  redirectCnt++;
}

function showIntro2(){
  $('.introContainer').hide();
  $('.intro2Container').show();
}

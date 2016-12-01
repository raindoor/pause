var cnt = 2;
var changeTimer;
(function($) {
  changeTimer = setInterval(changeIntroWord , 400);

})(jQuery);

function changeIntroWord(){
  if(cnt == 5){
    clearInterval(changeTimer);
    location.href = 'main.html';
    return;
  }
  console.log(cnt);
  $('.wordContainer h1').hide();
  $('.wordContainer .word'+cnt).show();
  cnt++;
}

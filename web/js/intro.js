var cnt = 2;
var changeTimer;

(function($) {

  changeTimer = setInterval(changeIntroWord , 700);

})(jQuery);

function changeIntroWord(){
  if(cnt == 3){
    clearInterval(changeTimer);
    location.href = 'main.html';
    return;
  }
  $('.wordContainer > div').hide();
  $('.wordContainer .word'+cnt).show();
  cnt++;
}

var time = 20;
$(document).ready(function(){
  var params = getQueryParams(document.URL);
  var dateInfo = +"월 "+params.dd+"일 "+params.word+", "+params.dayNight+" "+params.time+"시";
  $('#Resv3 .movieInfo').text(params.dateInfo);
});
function getQueryParams(qs) {

  qs = qs.indexOf('?') != -1 ? qs.split('?')[1].split('+').join(' ') : qs;

  var params = {},
  tokens,
  re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

function autoInit(){
  if(time <= 1){
    location.href = 'home.html';
    return;
  }
  time--;
  $('.time').text(time);
}

$(document).ready(function(){
  var params = getQueryParams(document.URL);
  var dateInfo = params.mm+"월 "+params.dd+"일 "+params.word+", "+params.dayNight+" "+params.time+"시";
  $('.movieInfo').text(dateInfo);
  $('input[name=dateInfo]').val(dateInfo);
  $('.movieUnit').click(function(){
    if($(this).attr('movieUrl'))
      changeMovieVideo($(this).attr('movieUrl'));
  });
  $("body").smoothWheel();
});

function getQueryParams(qs) {

  qs = qs.split('?')[1].split('+').join(' ');

  var params = {},
  tokens,
  re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

function changeMovieVideo(url){
  $('iframe').attr('src',url);
}

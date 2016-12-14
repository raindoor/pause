var movieInfo = [
  {text :
    [ "인셉션","인더하우스","로얄 테넌바움","센과 치히로의\n행방불명","빅쇼트",
    "셜록 : \n유령신부의 비밀","우리도 사랑일까","그녀","디아워스","야다"],
    url :
    [
      "../images/resv/1/1-large1.png",
      "../images/resv/1/1-1.png",
      "../images/resv/1/1-2.png",
      "../images/resv/1/1-3.png",
      "../images/resv/1/1-4.png",
      "../images/resv/1/1-5.png",
      "../images/resv/1/1-6.png",
      "../images/resv/1/1-large2.png",
      "../images/resv/1/1-7.png",
      "../images/resv/1/1-8.png",
    ]
  },
  {text :
    [ "어톤먼트","케빈에 대하여","빅피쉬","레미제라블","서브마린",
    "무드 인디고","멜랑꼴리아","대니쉬걸","아멜리에","문라이즈킹덤"],
    url :
    [
      "../images/resv/2/2-large1.png",
      "../images/resv/2/2-1.png",
      "../images/resv/2/2-2.png",
      "../images/resv/2/2-3.png",
      "../images/resv/2/2-4.png",
      "../images/resv/2/2-5.png",
      "../images/resv/2/2-6.png",
      "../images/resv/2/2-large2.png",
      "../images/resv/2/2-7.png",
      "../images/resv/2/2-8.png",
    ]
  },
  {text :
    [ "어톤먼트","케빈에 대하여","빅피쉬","레미제라블","서브마린",
    "무드 인디고","멜랑꼴리아","대니쉬걸","아멜리에","문라이즈킹덤"],
    url :
    [
      "../images/resv/3/3-large1.png",
      "../images/resv/3/3-1.png",
      "../images/resv/3/3-2.png",
      "../images/resv/3/3-3.png",
      "../images/resv/3/3-4.png",
      "../images/resv/3/3-5.png",
      "../images/resv/3/3-6.png",
      "../images/resv/3/3-large2.png",
      "../images/resv/3/3-7.png",
      "../images/resv/3/3-8.png",
    ]
  }
]
$(document).ready(function(){
  var params = getQueryParams(document.URL);
  var dateInfo = params.mm+"월 "+params.dd+"일 "+params.word+", "+params.dayNight+" "+params.time+"시";
  $('.movieInfo').text(dateInfo);
  $('input[name=dateInfo]').val(dateInfo);
  $('.movieUnit').click(function(){
    if($(this).attr('movieUrl'))
      changeMovieVideo($(this).attr('movieUrl'));
  });
  switch (params.word) {
    case "오늘":
      $('.movieUnit').each(function(idx){
        if(idx == 3 || idx == 5)
          $(this).css('padding-top','50px');
        else if(idx == 0)
          $(this).attr('movieUrl','https://www.youtube.com/embed/V3-a58Wt2tk').click();
        $(this).text(movieInfo[0].text[idx]);
        $(this).css('background-image','url('+movieInfo[0].url[idx]+')');
      });
      break;
    case "내일":
      $('.movieUnit').each(function(idx){
        if(idx == 0)
          $(this).attr('movieUrl','https://www.youtube.com/embed/IkF3M_FE4MM').click();
        $(this).text(movieInfo[1].text[idx]);
        $(this).css('background-image','url('+movieInfo[1].url[idx]+')');
      });
      break;
    case "모레":
      $('.movieUnit').each(function(idx){
        if(idx == 0)
          $(this).attr('movieUrl','https://www.youtube.com/embed/1Fg5iWmQjwk').click();
        $(this).text(movieInfo[2].text[idx]);
        $(this).css('background-image','url('+movieInfo[2].url[idx]+')');
      });
      break;
    default:

  }
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

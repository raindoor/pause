var movieInfo = [
  { movieTitleKr : "인셉션",
    movieTitleEn : "Inception",
    duringTime : "1시간 20분",
    year : "2015",
    director : "크리스토퍼 놀란",
    quoteEng : [
      "You're waiting for a train. A train that will take you far away.",
      "You know where you hope this train will take you, but you can't be sure.",
      "But it doesn't matter. Because we'll be together"
    ],
    quoteKor : [
      "기차를 기다리고 있어. 아주 멀리멀리 가는 기차야.",
      "기차가 멀리 간다는건 아는데, 어디로 가는건지는 확실하지 않아.",
      "하지만, 그건 중요하지 않아. 사랑하는 사람과 함께 있으니까."
    ]
  },
  { movieTitleKr : "어톤먼트",
    movieTitleEn : "Atonement",
    duringTime : "2시간 7분",
    year : "2007",
    director : "조 라이트",
    quoteEng : [
      "It's just...It's about young girl.",
      "A young and foolish girl who sees something from her bed room window",
      "what she doesn't understand, but she thinks she does."
    ],
    quoteKor : [
      "이건 그냥 한 소녀에 관한 이야기다.",
      "자신의 침실 창문 너머로 본 이해할 수 없는 장면을 이해한다고 생각한 한 어리석은 소녀.",
      ""
    ]
  },
  { movieTitleKr : "더랍스터",
    movieTitleEn : "The Lobster",
    duringTime : "1시간 18분",
    year : "2015",
    director : "요르고스 란티모스",
    quoteEng : [
      "Back then, he didn't know how much it hurts to be alone",
      "- how much it hurts when you cannot reach to rub pain ointment on your back",
      "and you are constantly in pain."
    ],
    quoteKor : [
      "그 전까진 그는 혼자 남겨지는게 얼마나 힘든지 몰랐다.",
      "등에 난 상처에 연고를 바르려 할 때 손이 닿지 않는게 얼마나 고통스러운지,",
      "그리고 그 고통이 멈추지 않을 때"
    ]
  },
]
var time = 7;
$(document).ready(function(){
  var params = getQueryParams(document.URL);
  $('#ResvInfo .movieDate').text(params.dateInfo);
  $('.prevNext .goPrev').click(function(){
    history.back();
  });
  var options = params.options;
  options = options.split('/');
  $('.movieOptions .content:eq(0)').text(options[0]);
  $('.movieOptions .content:eq(1)').text(options[1]);
  var idx;
  if((params.dateInfo).indexOf("오늘") != -1)       idx = 0;
  else if((params.dateInfo).indexOf("내일") != -1)  idx = 1;
  else                                             idx = 2;
  $('#ResvInfo .movieTitleKr'  ).text(movieInfo[idx].movieTitleKr);
  $('#ResvInfo .movieTitleEn'  ).text(movieInfo[idx].movieTitleEn);
  $('#ResvInfo .duringTime'    ).text(movieInfo[idx].duringTime);
  $('#ResvInfo .year'          ).text(movieInfo[idx].year);
  $('#ResvInfo .director'      ).text(movieInfo[idx].director);
  $('#ResvInfo .quoteEng:eq(0)').text(movieInfo[idx].quoteEng[0]);
  $('#ResvInfo .quoteEng:eq(1)').text(movieInfo[idx].quoteEng[1]);
  $('#ResvInfo .quoteEng:eq(2)').text(movieInfo[idx].quoteEng[2]);
  $('#ResvInfo .quoteKor:eq(0)').text(movieInfo[idx].quoteKor[0]);
  $('#ResvInfo .quoteKor:eq(1)').text(movieInfo[idx].quoteKor[1]);
  $('#ResvInfo .quoteKor:eq(2)').text(movieInfo[idx].quoteKor[2]);
  $('#ResvInfo .movieImg img').attr('src','../images/resv/'+(idx+1)+'/'+(idx+1)+'-large1.png')
  $("body").smoothWheel();
  setInterval(autoInit,1000);
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
    location.href = 'main.html';
    return;
  }
  time--;
  $('.time').text(time);
}

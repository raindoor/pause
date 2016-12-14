var animInfo =
[
  {
    startLeft : 186,
    startTop  : 820,
    nextLeft  : 45,
    nextTop   : -45,
    width     : 225,
    imgSrc    : '../images/main/00.png',
    count     : 10
  },
  {
    startLeft : 1087,
    startTop  : 257,
    nextLeft  : 34,
    nextTop   : 39,
    width     : 264,
    imgSrc    : '../images/main/01.png',
    count     : 12
  },
  {
    startLeft : 153,
    startTop  : 844,
    nextLeft  : 35,
    nextTop   : -55,
    width     : 293,
    imgSrc    : '../images/main/02.png',
    count     : 10
  },
  {
    startLeft : 1051,
    startTop  : 156,
    nextLeft  : 58,
    nextTop   : 58,
    width     : 257,
    imgSrc    : '../images/main/03.png',
    count     : 9
  },
  {
    startLeft : 161,
    startTop  : 448,
    nextLeft  : 78,
    nextTop   : 50,
    width     : 295,
    imgSrc    : '../images/main/04.png',
    count     : 8
  },
  {
    startLeft : 909,
    startTop  : 47,
    nextLeft  : 55,
    nextTop   : 46,
    width     : 174,
    imgSrc    : '../images/main/05.png',
    count     : 8
  },
  {
    startLeft : 1403,
    startTop  : 682,
    nextLeft  : 55,
    nextTop   : 46,
    width     : 174,
    imgSrc    : '../images/main/05.png',
    count     : 4
  }
]
var i = 0;
var j = 0;
var isIInterval = false;
var isJInterval = false;

var myInterval;

$(document).ready(function(){
  menuMouseOut();
  $(".mainMenu").each(function(index){
    $(this).mouseover(function(){
      menuMouseOver(index*2);
    }).mouseout(menuMouseOut);
  });
});
function menuMouseOver(index){
  var target = $('.backImagesDiv.idx'+index/2);
  $(target).css('display','block');
  isIInterval = true;

  i = 0;
  j = 0;
  myInterval = setInterval(function(){
    appendImage(target, index);
  },200);

}
function menuMouseOut(){
  clearInterval(myInterval);
  isJInterval = false;
  $('.backImagesDiv').css('display','none');
  $('.backImagesDiv img.dynamic').remove();
}
function appendImage(target, index){
  if(!isIInterval) return;
  var flag = 0;
  if(i < animInfo[index].count){
    var img = $('<img class="dynamic" src="'+animInfo[index].imgSrc+'"/>');
    $(img).css('top', animInfo[index].startTop +
                      animInfo[index].nextTop*i);
    $(img).css('left',animInfo[index].startLeft +
                      animInfo[index].nextLeft*i);
    $(img).css('width', animInfo[index].width);
    $(target).append($(img));
  }
  else flag++;
  if(index <= 5 && i < animInfo[index+1].count){
    img = $('<img class="dynamic" src="'+animInfo[index+1].imgSrc+'"/>');
    $(img).css('top', animInfo[index+1].startTop +
                      animInfo[index+1].nextTop*i);
    $(img).css('left',animInfo[index+1].startLeft +
                      animInfo[index+1].nextLeft*i);
    $(img).css('width', animInfo[index+1].width);
    $(target).append($(img));
    if(index == 4 && i == animInfo[index+1].count-1){
      isJInterval = true;
      appendImageLast(target, index+2);
    }
  }
  else flag++;
  if(flag < 2){
    i++;
    // setTimeout(function(){
    //   appendImage(target, index);
    // },200);
  }
  else{
    return false;
  }
}

function appendImageLast(target, index){
  if(!isJInterval) return;
  if(j < animInfo[index].count){
    var img = $('<img class="dynamic" src="'+animInfo[index].imgSrc+'"/>');
    $(img).css('top', animInfo[index].startTop +
                      animInfo[index].nextTop*j);
    $(img).css('left',animInfo[index].startLeft +
                      animInfo[index].nextLeft*j);
    $(img).css('width', animInfo[index].width);
    $(target).append($(img));
  }
  else{
    isJInterval = false;
  }
  j++;
  setTimeout(function(){
    appendImageLast(target, index);
  },200);
}

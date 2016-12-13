$(document).ready(function(){

  $(".tile").each(function(i){
    //  $(this).css("-webkit-transform", "translateZ(" + e[i]*1 + "px)")
            // .css("z-index", e[i])
    $(this).addClass('idx'+i)
    e = [310,345,-80,-205,300,170,-140,385,-105,-150]
    $(this).css("-webkit-transform", "translateZ(" + e[i] + "px)")
           .css("-moz-transform", "translateZ(" + e[i] + "px)")
           .css("transform", "translateZ(" + e[i] + "px)")
           .css("z-index", e[i])
  })
  $('#Resv').css("-webkit-transform", "translateZ(1000px)");

  $("body").mousemove(function( event ) {
    cx = Math.ceil($(window).width() / 2);
    cy = Math.ceil($(window).height() / 2);
    dx = .5 * (event.pageX - cx);
    dy = .5 * (event.pageY - cy);
    tiltx = dy / cy;
    tilty = -(dx / cx);
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = 30 * radius;
    $("#planeRotate").css("-webkit-transform", "rotate3d(" + tiltx + ", " + tilty + ", 0, " + degree + "deg)");

  });

  $('.selectDate div').click(function(){
    $('.selectDate .selected').removeClass('selected');
    $(this).addClass('selected');
    var add = parseInt($(this).attr('data-value'));
    var curDate = new Date();
    curDate.setDate(curDate.getDate() + add);
    console.log(curDate);
    $('#resvForm input[name=yyyy]').val(curDate.getFullYear());
    $('#resvForm input[name=mm]').val(curDate.getMonth()+1);
    $('#resvForm input[name=dd]').val(curDate.getDate());
    $('#resvForm input[name=word]').val($(this).text());
  })
  for(var i=1; i<13; i++){
    var option = $('<option value='+i+'>'+i+'시</option>');
    $('.timeList select').append(option);
  }
  $('.timeList select').change(function(){
    $('#resvForm input[name=time]').val($(this).val());
  });

  $('#resvForm input[name=dayNight]').val('낮');

  $('.dayNight').click(function(){
    if($(this).hasClass('day')){
      $(this).removeClass('day');
      $(this).addClass('night');
      $('#resvForm input[name=dayNight]').val('저녁');
    }
    else{
      $(this).removeClass('night');
      $(this).addClass('day');
      $('#resvForm input[name=dayNight]').val('낮');
    }
  })
});

$(document).ready(function(){

  $(".tile").each(function(i){
    //  $(this).css("-webkit-transform", "translateZ(" + e[i]*1 + "px)")
            // .css("z-index", e[i])
    $(this).addClass('idx'+i)
    e = [310,345,0,-205,300,170,-140,385,-105,-150]
    $(this).css("-webkit-transform", "translateZ(" + e[i] + "px)")
           .css("-moz-transform", "translateZ(" + e[i] + "px)")
           .css("transform", "translateZ(" + e[i] + "px)")
           .css("z-index", e[i])
  })
  $('#Resv').css("-webkit-transform", "translateZ(1000px)");

  $("body").mousemove(function( event ) {
    cx = Math.ceil($(window).width() / 2)
    cy = Math.ceil($(window).height() / 2)
    dx = .5 * (event.pageX - cx)
    dy = .5 * (event.pageY - cy)
    tiltx = dy / cy
    tilty = -(dx / cx)
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
    degree = 30 * radius
    $("#planeRotate").css("-webkit-transform", "rotate3d(" + tiltx + ", " + tilty + ", 0, " + degree + "deg)")

  });
});

// $(document).ready(function() {
//     function t(t, o) {
//         $("#projectsInfoToggle").addClass("invisible"), $("#backToProjects").removeClass("invisible"), $("#titleContainer").stop().fadeTo(0, 1).removeClass("invisible"), $("#blue").addClass("blue"), $("header").stop().fadeTo(n, 1), c = !1, $(document).prop("title", r + " - " + o), $.get(t, function(t) {
//             $("#workContainer").html(t)
//         }), $("#titleContainer").stop().addClass("invisible"), setTimeout(function() {
//             $("#workContainer").fadeTo(n, 1), $("#fadingContainer").stop().fadeTo(n, 1), $("#blue").removeClass("blue")
//         }, s)
//     }
//     function o() {
//         console.log("Back to Projects"), $("#fadingContainer").stop().fadeTo(n, 0, function() {
//             $("#projectsInfoToggle").removeClass("invisible"), $("#backToProjects").addClass("invisible"), $("#infoButton a").removeClass("activeSection"), $("#projectsButton a").addClass("activeSection"), $("header a").removeClass("whiteHeader"), $("#sayHelloButton a").removeClass("whiteHello").addClass("blackHello"), d = !1, $(document).prop("title", r), document.location.hash = "", $("#infoContainer").fadeOut(n, function() {
//                 $("#workContainer").scrollTop(0).stop().fadeOut(0).html(""), $("#planeZ").css("opacity", "1").fadeIn(0), setTimeout(function() {
//                     $("#fadingContainer").stop().fadeTo(n, 1), c = !0
//                 }, s)
//             })
//         })
//     }
//     function e() {
//         $(this).addClass("activeSection"), $("#projectsButton a").removeClass("activeSection"), $("#infoButton a").addClass("activeSection"), $("#fadingContainer").stop().fadeTo(n, 0, function() {
//             $("#planeZ").fadeOut(0), c = !1, $(document).prop("title", r + " - Info"), $("#infoContainer").stop().fadeTo(n, 1, function() {
//                 $("#fadingContainer").stop().fadeTo(s, 1)
//             })
//         })
//     }
//     console.log("Hello! Welcome to my portfolio site.");
//     var a = 0;
//     $(function() {
//         $(window).on("resize", function() {
//             var t = $(this).width();
//             t > 768 && 0 === a ? a = 1 : 768 >= t && 1 == a && (location.reload(), a = 0)
//         })
//     });
//     var i = 0;
//     $(function() {
//         $(window).on("resize", function() {
//             var t = $(this).width();
//             768 > t && 0 === i ? i = 1 : t >= 768 && 1 == i && (location.reload(), i = 0)
//         })
//     });
//     var n = 300,
//         s = 1.5 * n,
//         l = window.location.hash,
//         r = document.title,
//         d = !1,
//         c = !1;
//     if ("" == l)
//         setTimeout(function() {
//             o()
//         }, s);
//     else if ("#/info" == l)
//         e();
//     else {
//         var u = window.location.hash.substr(1),
//             f = $(".tile[data-url$='" + u + "']").data("headercolor");
//         1 == f && ($("#backToProjects a").addClass("whiteHeader"), $("#sayHelloButton a").addClass("whiteHello").removeClass("blackHello"), d = !0);
//         var h = window.location.protocol + "//" + window.location.host + "/projects" + u;
//         t(h)
//     }
//     $("#sayHelloButton a").hover(function() {
//         $(this).text("Hello!")
//     }, function() {
//         $(this).text("Say hello.")
//     }), $("#backToProjects a").hover(function() {
//         $(".backToProjectsLabel").css("max-width", "10em")
//     }, function() {
//         $(".backToProjectsLabel").css("max-width", "0em")
//     }), $("#infoContainer").on("mouseenter", ".postNextProject", function() {
//         $(this).text("Thanks for visiting! ;P")
//     }), $("#infoContainer").on("mouseleave", ".postNextProject", function() {
//         $(this).text("Thanks for visiting! :)")
//     }), $(function() {
//         $("#sayHelloButton").data("visibility", "hidden")
//     }), $(window).scroll(function() {
//         $(document).scrollTop() > 50 && $(window).width() > 768 ? "hidden" == $("#sayHelloButton").data("visibility") && ($("#sayHelloButton").data("visibility", "reveal"), $("#sayHelloButton a").animate({
//             top: "-1em",
//             opacity: "0"
//         }, n)) : "reveal" == $("#sayHelloButton").data("visibility") && ($("#sayHelloButton").data("visibility", "hidden"), $("#sayHelloButton a").animate({
//             top: "0em",
//             opacity: "1"
//         }, n))
//     }), $(window).scroll(function() {
//         $(document).scrollTop() > $(window).height() && $(window).width() > 768 && 1 == d && ($("#backToProjects a").removeClass("whiteHeader").addClass("blackHeader"), $("#sayHelloButton a").addClass("blackHello").removeClass("whiteHello"))
//     }), $(window).scroll(function() {
//         $(document).scrollTop() < $(window).height() && $(window).width() > 768 && 1 == d && ($("#backToProjects a").addClass("whiteHeader").removeClass("blackHeader"), $("#sayHelloButton a").addClass("whiteHello").removeClass("blackHello"))
//     }), $(".tile").each(function(t) {
//         var o = $(this).data("title");
//         if ($(this).find(".indexTitleM").text(o), $(window).width() > 768) {
//             var e = 5 * (Math.floor(160 * Math.random()) - 80),
//                 a = 5 * Math.floor(24 * Math.random()),
//                 i = 5 * Math.floor(28 * Math.random());
//             console.log("Div ", t + 1, ": depth " + e + "px", "/ top " + a + "vh", "/ left " + i + "vw"), $(this).css("-webkit-transform", "translateZ(" + e + "px)").css("-moz-transform", "translateZ(" + e + "px)").css("transform", "translateZ(" + e + "px)").css("z-index", e).css("margin-top", a + "vh").css("margin-left", i + "vw")
//         }
//     }), $("#titleContainer").fadeTo(0, 0), $(".tile").hover(function() {
//         $(this).siblings(".tile").stop().fadeTo(n, 1e-4);
//         var t = $(this).data("title");
//         $(".indexTitle").text(t), $(window).width() > 768 && $("#blue").addClass("blue"), $("header").stop().fadeTo(n, 0), $("#titleContainer").stop().removeClass("invisible").fadeTo(n, 1)
//     }, function() {
//         $(this).siblings(".tile").stop().fadeTo(n, 1), $("#titleContainer").stop().fadeTo(n, 0).addClass("invisible"), $("#blue").removeClass("blue"), $("header").stop().fadeTo(n, 1)
//     }), $(".tile a").click(function() {
//         var o = $(this).parent().data("url"),
//             e = $(this).parent().data("headercolor");
//         1 == e && ($("#backToProjects a").addClass("whiteHeader"), $("#sayHelloButton a").addClass("whiteHello").removeClass("blackHello"), d = !0), 0 == e && (d = !1);
//         var a = $(this).parent().data("title");
//         t(o, a)
//     }), $("#workContainer").on("mouseenter", ".postNextProject", function() {
//         $(".nextProjectSpace").css("width", ".3em")
//     }), $("#workContainer").on("mouseleave", ".postNextProject", function() {
//         $(".nextProjectSpace").css("width", "0em")
//     }), $("#workContainer").on("click", ".postNextProject", function() {
//         $("#preloader").stop().fadeTo(n, 1);
//         var o = $(this).parent().data("url"),
//             e = $(this).parent().data("title");
//         $("#workContainer").fadeOut(s), setTimeout(function() {
//             $("body").delay(n).scrollTop(0), window.scrollTo(0, 0), $("#workContainer").delay(n).scrollTop(0), t(o, e)
//         }, s)
//     }), $("#backToProjects a").click(function(t) {
//         o(), t.preventDefault()
//     }), $("#projectsButton a").click(function(t) {
//         o(), t.preventDefault()
//     }), $("#infoButton a").click(function(t) {
//         e(), t.preventDefault()
//     }), $(document).mousemove(function(t) {
//         $(window).width() > 600 && 1 == c && (cx = Math.ceil($(window).width() / 2), cy = Math.ceil($(window).height() / 2), dx = .5 * (t.pageX - cx), dy = .5 * (t.pageY - cy), tiltx = dy / cy, tilty = -(dx / cx), radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2)), degree = 30 * radius, $("#planeRotate").css("-webkit-transform", "rotate3d(" + tiltx + ", " + tilty + ", 0, " + degree + "deg)"), $("#planeRotate").css("transform", "rotate3d(" + tiltx + ", " + tilty + ", 0, " + degree + "deg)"))
//     })
// });
//
//

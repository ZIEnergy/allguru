$(document).ready(function(){

















$(".gallery__small-item").click(function(e){e.preventDefault(),$(".gallery__big-picture").attr("src",$(this).data("content")),$(".gallery__big-video").hide(),$(".gallery__big-picture").show()}),$(".gallery__small-item--video").click(function(e){e.preventDefault(),$(".gallery__big-video").attr("src",$(this).data("content")),$(".gallery__big-picture").hide(),$(".gallery__big-video").show()});

$(".header__menu-button").click(function(){$(this).toggleClass("header__menu-button--active"),$(".header__content").fadeToggle("fast").css("display","flex")});

$(window).width()<750&&($(".content__items").addClass("content__items--short"),$(".item").addClass("item--short"));





$(".modal-link").magnificPopup({type:"inline"});








$(".region__button--west").click(function(e){e.preventDefault(),$(".region__map--west").hide(),$(".region__map--east").fadeIn("fast"),$(".region__cities--west").hide(),$(".region__cities--east").fadeIn("fast").css("display","flex")}),$(".region__button--east").click(function(e){e.preventDefault(),$(".region__map--east").hide(),$(".region__map--west").fadeIn("fast"),$(".region__cities--east").hide(),$(".region__cities--west").fadeIn("fast").css("display","flex")});

$(".search__region").change(function(){$(".search__region option").each(function(){$(".search__other-city").is(":selected")&&$(".search__region-link").click()})});








$(".slider").slick({slidesToShow:4,infinite:!1,variableWidth:!0,responsive:[{breakpoint:750,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!1}}]});
$(".sorting__view-item--long").click(function(t){t.preventDefault(),$(".content__items").removeClass("content__items--short"),$(".item").removeClass("item--short")}),$(".sorting__view-item--short").click(function(t){t.preventDefault(),$(".content__items").addClass("content__items--short"),$(".item").addClass("item--short")});







$(".go-top").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}});})
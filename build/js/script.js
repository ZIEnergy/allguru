$(document).ready(function(){



























$(".modal-link").magnificPopup({type:"inline"});






$(".region__button--west").click(function(e){e.preventDefault(),$(".region__map--west").hide(),$(".region__map--east").fadeIn("fast")}),$(".region__button--east").click(function(e){e.preventDefault(),$(".region__map--east").hide(),$(".region__map--west").fadeIn("fast")});









$(".slider").slick({slidesToShow:4,infinite:!1});

$(".sorting__view-item--long").click(function(t){t.preventDefault(),$(".content__items").removeClass("content__items--short"),$(".item").removeClass("item--short")}),$(".sorting__view-item--short").click(function(t){t.preventDefault(),$(".content__items").addClass("content__items--short"),$(".item").addClass("item--short")});






$(".go-top").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}});})
$(document).ready(function(){


























$(".modal-link").magnificPopup({type:"inline"});






$(".region__button--west").click(function(e){e.preventDefault(),$(".region__map--west").hide(),$(".region__map--east").fadeIn("fast")}),$(".region__button--east").click(function(e){e.preventDefault(),$(".region__map--east").hide(),$(".region__map--west").fadeIn("fast")});









$(".slider").slick({slidesToShow:4,infinite:!1});








$("a[href*=#]:not(.modal-link)").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}});})
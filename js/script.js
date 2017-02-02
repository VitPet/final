var log="cursor";
var pass="education";

function clik() {
  login = $(".log").val();
  password = $(".pass").val();
if(log == login && pass==password)
	document.location.href = "https://vk.com";
}


    $(document).ready(function() {
        var RBStickyNav = $('.RBsticky-element').offset().top;
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > RBStickyNav) {
                $('.RBsticky-element').addClass('RBSticky');
            } else {
                $('.RBsticky-element').removeClass('RBSticky');
            }
        };
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    });
 
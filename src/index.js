jQuery(document).ready(function ($) {
const $burger = $(".burger");
const $links = $(".header__links-container");
const $arrowUp = $(".arrowUp");
const $headerlinks = $(".header__links");
const $link = $(".header__link");
const $html = $("html");

$burger.on("click", function () {
    $links.fadeToggle();
    $html.toggleClass("overflow-hidden");
});

    $(window).on(
        "scroll",
        $.debounce(100, function () {
          if ($(this).scrollTop() > 200) {
            $arrowUp.addClass("active");
          } else {
            $arrowUp.removeClass("active");
          }
        })
      );

      $arrowUp.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
      });

      $headerlinks.on("click", function (e) {
        const target = $(this).attr("href");
        $(target).offset().top;
        $("html, body").animate({ scrollTop: $(target).offset().top - 75 }, 500);
      });

      $link.on("click", function () {
        if ($(window).width() < 800) {
          $links.hide();
        }
        
        $html.removeClass("overflow-hidden")
        
      })

      
    
    

});



        // new coracel
        $(function () {
            $('.material-tooltip-main').tooltip({
              template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-inner"></div></div>'
            });
          })



          $(window).scroll(function(){
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
          });

// another corasel


$('#blogCarousel').carousel({
    interval: 3000
});
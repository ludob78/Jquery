function ScrollToPlugin($) {
    function _showHideOnScroll(start) {
        if ($(window).scrollTop()>start){
            $('#back_to_top').fadeIn("slow");
        }else {
            $('#back_to_top').fadeOut('slow');
        }
    }
    $.fn.backToTop=function (options) {
        var defaults={
            duration:100,
            start:200,
            position:'right'
        };
        var conf=$.extend(defaults,options)
        this.append('<div id="back_to_top">^</div>');
        $('#back_to_top').css(conf.position,"10px").hide();
    $(window).scroll(function () {
        _showHideOnScroll(conf.start);
    });
    $('#back_to_top').click(function () {
        var ratio=$(window).scrollTop()/$('body').height();

        $("html,body").animate({"scrollTop":0},ratio*conf.duration)
        $("#wrapper").animate({"width":"60%"},conf.duration)
    });
        return this
    }


    $.fn.ScrollToElement=function (options) {
        var defaults={
            duration:100,
            toElement:""
        };
        var conf=$.extend(defaults,options)
        $('[scrollTo*="#"]').each(function () {
            // var ratio=$(window).scrollTop()/$('body').height();
            $(this).click(function() {
                $('html, body').animate({
                     scrollTop: $($(this).attr('scrollTo')).offset().top
                }, 2000);
            });
        });
        return this
    }
}
ScrollToPlugin($);

$(document).ready(function () {

   $('body').backToTop({
       duration:500,
       start:1,
       position:'left'
   });

    $('body').ScrollToElement({})


});
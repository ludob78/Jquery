$(document).ready(function () {
    var conf = {
        wLoupe: 200,
        hLoupe: 200,
        loupeRadius: "10%"
    };
    $(".zoom .zoom_big").hide();
    $(".zoom .zoom_small").css({
        cursor:"zoom-in"
    });

    var Wsmall = $(".zoom .zoom_small").width();
    var Hsmall = $(".zoom .zoom_small").height();
    var offsetTop = $(".zoom .zoom_small").offset().top;
    var offsetleft = $(".zoom .zoom_small").offset().left;
    console.log(
        "Wsmal:" + Wsmall
        , "Hsmal:" + Hsmall
        , "offsetTop:" + offsetTop
        , "offsetleft:" + offsetleft
    );
    $("body").append("<div class='loupe'></div>");
    $('.loupe').css({
        "border-radius": conf.loupeRadius,
        "background-image": 'url(' + $(".zoom .zoom_big").attr("src") + ')',
        height: conf.hLoupe + 'px',
        width: conf.wLoupe + 'px',
        border: "1px solid red",
        position: "absolute",
    }).hide();

    $(".zoom .zoom_small").mouseenter(function () {
        $('.loupe').show();
    }).mouseout(function () {
        $('.loupe').hide();
    }).mousemove(function (e) {
        var x=e.clientX-offsetleft;
        var y=e.clientY-offsetTop;
        var coefX=(x/Wsmall)*100;
        var coefY=(y/Hsmall)*100;
        // console.log("e.clientX:"+e.clientX);
        // console.log("e.clientY:"+e.clientY);
        console.log(
            $('.loupe').css({
            left:e.clientX+"px",
            top:e.clientY+"px",
            "background-position":coefX+'% '+coefY+'%'
            })
        )
        ;

    })
});
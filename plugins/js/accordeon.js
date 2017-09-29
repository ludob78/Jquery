(function (jQuery) {
    jQuery.fn.accordeon = function (options) {
        //this représente la collection d'élément roots pour chacun des accordeons dans la page
        var defaults = {
            speed:"slow"
        };
        var conf = $.extend(defaults, options);

        // this.find('div.content_accordeon').slideUp();
        this.find('div').slideUp();
        this.find('div').css({"background-color":"grey"});
        this.first().addClass("active");
        var collectionsRoots = this;
        // this.find('div.header_accordeon').click(function () {
        this.click(function () {
            //this représente l'élément H2 clické
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").find('div').slideUp(conf.speed);
            } else {
                collectionsRoots.find("active").find('div').slideUp(conf.speed);
                $(this).find('div').slideToggle(conf.speed);
                $(this).addClass("active")
            }

        });
        return this
    }

    jQuery.fn.accordeon_tab = function (options) {
        //this représente la collection d'élément roots pour chacun des accordeons dans la page
 /*       var defaultsLi={
            "list-style-type": "none",
            display: "inline",
            "margin-left":"5px",
            "border":"1px black solid",
            "border-radius":"5px",
            padding:"5px"
        };*/
        var defaults = {
            "list-style-type": "none",
            display: "inline",
            "margin-left":"5px",
            "border":"1px black solid",
            "border-radius":"5px",
            padding:"5px",
            speed:"fast"
            // defaultsLi
        };
        var conf = $.extend(defaults, options);
        // this.find("li").css(defaultsLi);
        // ou
        /*this.find("li").css({
            display:conf.display,
             "list-style-type": conf['list-style-type'],
            "margin-left":conf["margin-left"],
            border:conf.border,
             "border-radius":conf["border-radius"],
            padding:conf.padding
        });*/
        // ou
        this.find("li").css(defaults);

        this.each(function () {
          // console.log($(this).find("li"))
            var collectionsRoots = $(this).find("li")
            $(this).nextAll('div').hide()
            var idAccordeon= collectionsRoots.first().addClass("active").attr("accordeon")
            $(idAccordeon).show();
            collectionsRoots.click(function () {
                var idAccordeon=$(this).attr("accordeon")
                console.log(idAccordeon)
                if ($(this).hasClass("active")){
                    $(this).removeClass("active")
                    $(idAccordeon).slideUp(conf.speed);
                }
                else {

                    $(idAccordeon).slideUp(conf.speed);
                    $(this).removeClass('active');

                    $(idAccordeon).toggle(conf.speed);
                    $(this).addClass("active")
                }
            })
        })


      /*  var collectionsRoots = this.find("li");
         $('.content_accordeon_tab').hide();

        var idAccordeon= collectionsRoots.first().addClass("active").attr("accordeon")
        $(idAccordeon).show();
        collectionsRoots.click(function () {
            //this représente l'élément H2 clické
            var idAccordeon=$(this).attr("accordeon")
            if ($(this).hasClass("active")) {
                $(this).removeClass("active")
                $(idAccordeon).slideUp(conf.speed);
            } else {
                var IdCurrentActiveLi=$('li.active').attr("accordeon");
                $(IdCurrentActiveLi).slideUp(conf.speed);
                // console.log();
                $('li.active').removeClass('active');
                $(idAccordeon).toggle(conf.speed);
                $(this).addClass("active")
            }
        });*/



        return this
    }
})(jQuery)


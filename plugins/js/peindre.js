//Création des méthodes pour un plugins.
(function ($) {
    $.fn.peindre=function (options) {
        var defaults={
            color:"yellow",
            margin:0
        };
        var conf=$.extend(defaults,options);
        this.css('background-color',conf.color);
        return this;
    }
})(jQuery)
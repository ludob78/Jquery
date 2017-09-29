$(document).ready(function () {

    $("div.tabs div").nextAll().hide();
    $("ul li").first().addClass('active');

    switch_tab();

    function switch_tab() {
        $("ul li").click(function () {
            old_forIdElement = $("ul li.active").removeClass("active").attr("forIdElement");
            $("#" + old_forIdElement).slideUp();
            // $("#" + old_forIdElement).animate({width:'toggle'},350);
            // $("#" + old_forIdElement).show("slide", { direction: "left" }, 1000);
            forIdElement = $(this).addClass('active').attr("forIdElement");
            $("#" + forIdElement).slideDown();
            // $("#" + forIdElement).animate({width:'toggle'},350);
            // $("#" + forIdElement).show("slide", { direction: "left" }, 1000);
            ;
        })
    }

});
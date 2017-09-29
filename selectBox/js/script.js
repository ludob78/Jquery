function Ready() {
    $('select').hide();
    $("<div class='custom_select'>" +
        "<div class='btn'></div>" +
        "<div class='liste'></div>" + "</div>")
        .insertBefore($('select'));
    $('.custom_select .liste').hide();


    $('.custom_select').each(function () {
        var c = $(this).next();
        $(this).find('.btn').html($(this).next().find(':selected').html())

        var ul = "<ul>";
        $(this).next().find("option").each(function () {
            ul += "<li><a href='#' customval='" + $(this).val() + "'>" + $(this).html() + "</a></li>"
        });
        ul += "</ul>";
        $(this).find('.liste').html(ul)
    });
    $(".custom_select .btn").click(function () {
        $('.custom_select .liste').hide();
        $(this).next().toggle();
    });
    $("a[customval]").click(function () {
        var value=$(this).attr("customval"),displayVal=$(this).html();
        $(this).parent().parent().parent().parent().next().val(value);
        $(this).parent().parent().parent().prev().html(displayVal);
        $(this).parent().parent().parent().toggle();
    });
    $("input[type=submit]").click(function (e) {
        e.preventDefault();
        $('select').each(function () {
            console.log($(this).val());
        })
    })
};
$(document).ready(Ready);
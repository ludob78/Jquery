$(document).ready(function () {
    $('input[type=checkbox]').each(function () {
        $(this).hide();
        $('<div class="custom_select"></div>').insertBefore($(this));
    });
    $('.custom_select').click(ToggleElem);
    function ToggleElem() {
        var checkBox = $(this).next();
        if (checkBox.is(':checked')) {
            checkBox.prop("checked",false);
        }else {
            checkBox.prop("checked",true);
        }
        $(this).toggleClass("on")
        // ou
        // $(this).toggleClass('on').next().prop("checked",!$(this).next().is(':checked'))

    }
    $('input[type="submit"]').click(function (e) {
        e.preventDefault();
        var res=[];
        $('input[type=checkbox]:checked').each(function () {
            res.push($(this).val());
        });
        console.log(res);
    })
});
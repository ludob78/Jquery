$(document).ready(function () {
    var input=($('input[type=submit]'));
        input.css({
            position:"relative"

        })
    // console.log($('textarea').val())
    input.click(function () {
        var textarea=$('textarea');
        eval(textarea.val());
    })
});
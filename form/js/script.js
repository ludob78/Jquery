$(document).ready(function () {
    /*var form = $('form');
    var errMsg = 'Merci de saisir uniquement des chiffres'
    var input = form.find('input');
    var numberRequired = /^[0-9]+$/
    var number = /^[0-9]*$/
    regExp = number;
    if (input.val() === "") {
        input.removeClass("valid")
        input.addClass("invalid")
    }
    regExp = numberRequired;
    // input.attr("pattern","[0-9]+");
    // input.prop("required",true);
    input.keypress(function (e) {
        if (/^[0-9]$/.test(e.key)) {
            return true;
        } else return false

    })

    input.keyup(function () {
        var newVal = input.val();
        // console.log(newVal)
        if (regExp.test(newVal)) {
            // console.log('test')
            input.removeClass("invalid");
            input.addClass("valid")
            $('.divError').remove();
            // console.log( input.prop(":valid",true))
        }
        else {
            // console.log('else')
            input.removeClass("valid");
            input.addClass("invalid")
            showMessage(input, errMsg)
            // console.log( input.prop(":valid",false))
        }
    })
    function showMessage(element, message) {
        // if (element.error)
        $('.divError').remove();
        var divError = document.createElement('div')
        $(divError).addClass("divError")
        $(divError).css({
            position: 'absolute',
            top: element.offset().top + 'px',
            left: element.width() + element.offset().left + 10 + "px"
        })
        $(divError).html(message);
        form.append(divError);

    }*/
$('form').ValidateForm({numericMask:function (e) {
    console.log('new mask function for Binary')
    if (/^[0-1]$/.test(e.key)) return true;
    else return false;
}});
// showMessage(input,errMsg)
})
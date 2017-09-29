(function ($) {
    $.fn.ValidateForm = function (options) {
        var conf=$.extend({
            numericMask:function (e) {
                if (/^[0-9]$/.test(e.key)) return true;
                else return false;
            },
            numericRequisMask:function () {},
            alphaMask:function () {},
        },options)
        var defaults = {
            numeric: {
                RegEx: "^[0-9]*$", ErrorMsg: "Numeric only", mask:conf.numericMask
            },
            numericRequis: {
                RegEx: "^[0-9]+$", ErrorMsg: "Numeric Required only", mask: conf.numericRequisMask
            },
            alpha: {
                RegEx: "^[a-zA-Z]*$", ErrorMsg: "Alpha only", mask: conf.alphaMask
            },
            alphaRequis: {
                RegEx: "^[a-zA-Z]+$", ErrorMsg: "Alpha Required only", mask: function () {
                }
            },
            date: {
                RegEx: "^(0[1-9]{1}|[12]{1}[0-9]{1}|30|31(?=\/(0[1-9]{1}|1[0-2]{1}(?=\/20[0-9]{2}$))))",
                ErrorMsg: "Date Format only",
                mask: function () {
                }
            },
            url:{
                RegEx: "^(http|https|ftp|ftps)(?=:\/\/(?=(www\.|(?!w))(?=[A-Za-z0-9_-]+\.(?=[A-Za-z]{2,5}$))))",
                ErrorMsg: "URL Format only",
                mask: function () {
                }
            }
        }
        this.find('input[vType]').each(function () {
            var Vtype = $(this).attr('vType');
            _manageInput($(this),Vtype,defaults);
            switch (Vtype) {
                case "numeric":
                   $(this).keypress(defaults[Vtype]["mask"]);

                    break;
                case "numericRequis":

                    break;
                case "alpha":

                    break;
                case "alphaRequis":

                    break;
                case "date":

                    break;
            }
        });
        return this;
    }
})($)

function _manageInput(input,str,conf){
    if (input.attr('ErrorMsg') == undefined) {
        input.attr('ErrorMsg', conf[str]['ErrorMsg']);
    }
    input.attr('RegEx', conf[str]['RegEx']);
    input.keyup(_keyup);
}

function _keyup() {
    var input = $(this);
    var NewVal = input.val();

    if ((new RegExp(input.attr('RegEx'))).test(NewVal)) {
        input.removeClass("invalid");
        input.addClass('valid');
        $(".error").remove();
    } else {
        input.removeClass("valid");
        input.addClass("invalid");
        _showMessage(input, input.attr('ErrorMsg'));
    }
}

function _showMessage(element, message) {
    $(".error").remove();
    $('body').append('<div class="error"></div>');
    $('.error').css({
        position: 'relative',
        top: element.offset().top + 'px',
        left: element.offset().left + element.width() + 10 + "px",
    });
    //element.errorDiv =$(div);
    $('.error').html(message)
}

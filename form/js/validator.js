(function ($) {
        $.fn.ValidateForm = function (options) {
            var defaults = {
                numeric: {
                    regExp: "^[0-9]*$", errorMsg: "Numeric only", mask: function () {

                    }
                },
                numericRequired: {
                    regExp: "^[0-9]+$", errorMsg: "Numeric only", mask: function () {

                    }
                }
            }
            this.find('input[vType]').each(function () {
                var vType = $(this).attr('vType');
                switch (vType) {
                    case "numeric":
                        $(this).keypress();
                        $(this).keyup(_keyup);
                        break;
                    case "numericRequired":
                        break;
                }
            })
            // var conf = $.extend(defaults, options)
        }
        function _keyup(){
            var newVal = $(this).val();
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
                _showMessage(input, errMsg)
                // console.log( input.prop(":valid",false))
            }
        }
        function _showMessage(element, message) {
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

        }
    }

)($)
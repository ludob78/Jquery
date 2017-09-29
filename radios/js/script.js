$(document).ready(function () {
    $('input[type=radio]').each(function () {
        $(this).hide();
        $('<img src="./img/radio_off.png" class="customRadios">').insertBefore($(this));
    });

    $('input[type=radio]').each(function () {
        // console.log($(this).attr('name'));
        /*       $(this).attr('name').each(function () {
         console.log($('input[type=radio]'));
         })*/
    });

    $('.customRadios').click(function () {
        var nameAttr = $(this).next().attr("name");
        // console.log(nameAttr);
        // console.log($('input[name=nameAttr]:checked'));
        $('input[name=' + nameAttr + ']:checked').prev().attr('src', './img/radio_off.png');
        var CurrentRadio = $(this).next();
        if (CurrentRadio.is(':checked')) {
            CurrentRadio.prop("checked", false);
            $(this).attr('src', './img/radio_off.png')
        } else {
            CurrentRadio.prop('checked', true);
            $(this).attr('src', './img/radio_on.png')
        }
    });


    $('input[type="submit"]').click(function (e) {
        e.preventDefault();
        console.log(document.querySelector('form').checkValidity());
        if (
            ($('input[name=sexe]:checked').length == 1)
            && ($('input[name=casier]:checked').length == 1)
        ) {
            console.log($('input[name=sexe]:checked').val());
            console.log($('input[name=casier]:checked').val());
        }
        else {
            alert("les valeurs sont obligatoire")
        }
    });

});
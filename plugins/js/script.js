$(document).ready(function () {
   // $('div.header_accordeon').first().peindre();
   // $('div.header_accordeon').last().peindre({color:'blue'});

    // $('.header_accordeon').first().addClass("active");
    // $('.content_accordeon').slideUp();
    $('.header_accordeon').accordeon({speed:"fast"});

    $('.ul_accordeon_tab').accordeon_tab({speed:"slow","border-radius":"10px"});
    // $('.ul_accordeon_tab').accordeon_tab_2();

});
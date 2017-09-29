$(document).ready(function () {
    /* $(".accordeon div").hide();
     $("h2").first().addClass('active').next().show();

     $("h2").click(function () {
            //Si l'élément sélectionné est déjà active.
         if ($(this).hasClass("active")){
             // retirer la classe active de l'élément courant et fermer l'élément qui le suit
             $(this).removeClass("active").next().hide("slow")
         }
         else {
             //retirer la class active de l'élément qui a cette classe et et fermer l'élément qui suit ce dernier
             $("h2.active").removeClass('active').next().hide("slow");
             //Ajouter la classe active à l'élément courant et afficher son élément qui suit
             $(this).addClass('active').next().show("slow");
         }
     });*/

     //new version
         $(".accordeon div").slideUp();
         $("h2").click(function () {
        if ($(this).hasClass("active")){
            $(this).removeClass("active").next().slideUp("slow")
        }
        else {
            $("h2.active").removeClass('active').next().hide("slow");
            $(this).addClass('active').next().slideDown('slow');
        }
    })


});
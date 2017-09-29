console.log('script loaded');
// appel fonction avec document qui appel la fonction ready
$(document).ready(
    function () {
        console.log("Document loaded");
        console.log("document.getElementById:", document.getElementById("divId"));
        console.log("$(\"#divId\"):", $("#divId"));
        console.log("$(\"#divId\")[0]:", $("#divId")[0]);
        console.log("jQuery(\"#divId\"):", jQuery("#divId"));
        console.log("$(\".divClass\")[0]:", $(".divClass")[0]);
        console.log("jQuery(\".divClass\"):", jQuery(".divClass"));

        var divId = jQuery("#divId");
        var divClass = jQuery(".divClass");
        // divId.css("background-color", "red");
        divId.css("border", "1px solid red");
        divId.css("height", "100px");
        divId.css("width", "100px");
        //avec un objet
        divClass.css({
            'border-radius': '50%'
            , 'width': '100px'
            , 'height': '100px'
            , 'border': '1px solid blue'
        });
        divClass.height(200);
        console.log(divClass.height());
        divClass.width(200);
        console.log(divClass.width());

        $("ul li a").css("color", "red");
        $("ul li:first-child a").css("color", "blue");

        console.log($("h1").html());
        $("ul li:nth-child(2)").next().find('a').css("color", "yellow");//find permet de chercher un élément dans un autre élément
        $("h1").html("jQuery").css("color", "green"); //équivalent du InnerHTML en JS
        $("ul li").last().hide();//permet de récupérer le dernier li pour ne pas utiliser last-child en css et on le cache
        $("ul li:nth-child(2)").next().next().next().show();
        // $("ul li:nth-child(2)").prev().html("GOOGLE").css("color","green");

        console.log($("#divId div:first-child").next(".test").css('color', 'pink'))//léléement suivant la div enfant de divId, je prend son next qui doit avoir la condition class test pour appliquer le css
        /************************SHOW OU HIDE**************************/
        $('#link1GG').click();
        $('#link1GG').click(function (e) {//ou event dans la fonction sans paramètre à la fonction (déconseiller car désactive les éventuels autres évènements de l'élément
            e.preventDefault();//Annule l'évènement click de l'élément a
            if ($("h1").html() == "clicked!!!") {
                $("h1").html("jQuery");
                $("#divId").show("fast");
            } else {
                // divId.hide("slow");
                $("h1").eq(0).css("color", "red");//eq permet d'aller chercher l'élément à partir de son index
                console.log($("h1"));
                console.log($("h1").eq(1));
                divId.hide(10);
                $("h1").html("clicked!!!");
            }
        });//Evenement click
        /**********************TOGGLE****************************/
        /*function onMouseOver() {
            this.style.backgroundColor="blue";
        }
        var onMouseLeave= function () {
            this.style.backgroundColor="white";
        };
        $("ul li").eq(1).mouseover(onMouseOver);
        $("ul li").eq(1).mouseleave(onMouseLeave);*/

                        // ou

        $("ul li").eq(3).mouseover(ToggleElem);
        $("ul li").eq(3).mouseleave(ToggleElem);
       function ToggleElem () {
                $("ul li").eq(3).toggleClass("color");
        }
        /***************************Attribut*********************************/
        // get d'un attribut
       var attr=$("ul li").first().find('a').attr("href");
        console.log(attr);
        // set un attribut
        $("ul li").first().attr("yahoo","www.yahoo.fr")



    }
);
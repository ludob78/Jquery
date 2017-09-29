//A FINALISER
$(document).ready(function () {


    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js", function () {

    })
    var apiKey = "8a3fb64df3e8fa5084b00f9aa13401d5";
    var movieUrl = "https://api.themoviedb.org/3";
    var movieImgUrl = "https://image.tmdb.org/t/p/";
    // https://image.tmdb.org/t/p/w92/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg
    //
    var sizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780'];
    var TheMovieLang = "fr-fr";

    $('#rechercheInput').autocomplete({
        api_key: apiKey,
        url: movieUrl + '/search/movie',
        nbChar: 3,
        propArrayDansData: "results",
        CompleteProp: 'title'
    });
    function validSearch(e){
        var titre =  $('#rechercheInput').val();
        if (titre != "") SearchResult(titre);
        //console.log(e);
        console.log("this:",this);
        console.log("e.key2:",e.key);
        if(e.key == "Enter") {
            $('.cplList').hide();
        }


    }
    $('#rechercheInput').on('keyup',function (e) {
        console.log("e.key1:",e.key);

            //la fonction call permet de modifier l'élément d'origine de l'évènement
        if (e.key=="Enter"){
            validSearch.call($('#ValiderInput'),e);
        }

        if (e.key=="ArrowDown"){

            console.log("je suis la")
            console.log($('div.cplList ul li:first-child'))
            $('div.cplList ul li:first-child').css({
                "background-color":" #00acc1",
                color:"white",
            }).focus();
        }
    })
    $('#ValiderInput').on('click', validSearch);
    $('div.basket').draggable();
/*    $('div.cplList ul li').on('mouseover',function () {
        console.log($(this))
        $(this).css({

        })
    })*/

    //****************************Début Droppable*************************************//

    $('.basket').droppable({
        tolerance: 'touch',
        drop: function (event, ui) {
            var img = ui.helper.attr('image')
            var titre = ui.helper.attr('title')
            var price = ui.helper.attr('price');
            // console.log("ui.draggable.find('img'):", ui.draggable.find("img"))
            var html =
                '<div class="row">' +
                '<div class="col s1 suppr_elt red">X</div>' +
                '<div class="col s7" id="basket_title">' + ui.draggable.find("h2").html() + '</div>'+
                // '<div class="col s3" id="basket_img">'+ui.draggable.find("img")+'</div>'+
                // if(img!=null){
                '<div class="col s3" id="basket_img"><img src="' + movieImgUrl + sizes[0] + img + '"></div>'+
                // }
                '<div class="col s1" id="basket_price">' + ui.draggable.attr("price") + '</div>' +
                '</div>'
            $('.basket').append(html);
            $('.basket').find("span").html($('.basket').find("div.row").length - 1);//-1 = moins le span
            // console.log("$('.basket')",$('.basket'))
            // console.log("$('.basket').childElementCount",$('.basket')[0].childElementCount)
            $('.suppr_elt').on('click', function () {
                $(this).parent().remove();
                $('.basket').find("span").html(($('.basket')[0].childElementCount) - 1)
            })
        }
    })
    //****************************Fin Draggable*************************************//

//****************************Début VOICER*************************************//

    //VOICER sur résumé

    function Voicer() {


        var audio = new Audio()

        // console.log($('p.resume'))
        $('p.resume').on('mouseenter',function () {
            // console.log($('p.resume').html())
            //  $.speech({
            var data = {
                key: 'f9dd0457e9d04e8c99c344f1458720fd',
                src: $(this).html(),
                hl: 'fr-fr',
                r: 0,
                c: 'mp3',
                f: '44khz_16bit_stereo',
                ssml: false
            }
            //  })
            function _buildRequest(e) {
                var a = e.c && "auto" != e.c.toLowerCase() ? e.c : this._detectCodec();
                return "key=" + (e.key || "") + "&src=" + (e.src || "") + "&hl=" + (e.hl || "") + "&r=" + (e.r || "") + "&c=" + (a || "") + "&f=" + (e.f || "") + "&ssml=" + (e.ssml || "") + "&b64=true"
            }

            $.ajax({
                type: "POST",
                url: "https://api.voicerss.org/",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                data: _buildRequest(data),
                dataType: "text",
                success: function (e, a, c) {
                    // console.log(e)
                    if (0 == e.indexOf("ERROR"))throw e;
//                    var audio = new Audio(e)
                    //permet de stopper la lecture en cours pour la recommencer du début
                    $(audio).attr("src", e)
                    audio.load()
                    audio.play();
                    /*       $(audio).on('ended',function () {
                     $.speech({
                     key:'f9dd0457e9d04e8c99c344f1458720fd',
                     src:'test 2e speech',
                     hl:'fr-ca',
                     r:0,
                     c:'mp3',
                     f:'44khz_16bit_stereo',
                     ssml:false
                     })
                     })*/
                }
            })

        })
    }

    //****************************Fin VOICER*************************************//

    function LoadInHtml(movies) {

        var html = '<div class="row">';

        $.each(movies, function (i, movie) {
            // console.log(movie[i])
            html += '<div class="film col s12" image="' + movie.backdrop_path + '" title="' + movie.title + '" price="25"><h2>' + movie.title + ' (' + movie.release_date + ')</h2>'
            html += '<p class="resume col s12">' + movie.overview + '</p>'
            if (movie.backdrop_path) {
                html += '<img class="col s12" src="' + movieImgUrl + sizes[5] + movie.backdrop_path + '">'
            }
            html += '</div><hr>'

        })
        html += '</div>';
        // <hr><div class="row"><div class="col s9">Total</div><div class="col s3">somme</div></div>
        $('#result').html(html);
        // $('#result').append($(html));


        // console.log($('div.film'))

        //****************************Début Draggable*************************************//
        $(function () {
            $('div.film').draggable({
                cursor: 'move',
                helper: 'clone',//copie de l'élement HTML sur lequel le draggable s'applique
                drag: function (event, ui) {
                    ui.helper.propr = "aaaa";
                    var img = ui.helper.attr('image')
                    var titre = ui.helper.attr('title')
                    var price = ui.helper.attr('price');
                    ui.helper.data = {
                        imgIllustration: img,
                        titre: titre,
                        price: price
                    }

                    var htmlDragg =
                        '<div class="card" style="width: 10rem">' +
                        '<div class="card-image">' +
                        '<span class="card-title" style="color: black">' + titre + '</span>'+
                       // if(img!=null){
                        '<img src="' + movieImgUrl + sizes[0] + img + '" alt="Card image cap">'+
                       // }
                        '</div>' +
                        '</div>';
                    ui.helper.css('z-index', '999').html(htmlDragg);
                }


            })

        })
        //****************************Fin Draggable*************************************//


    }

    function Pagination(data_receive, TheMovieCurrentPage) {
        // console.log("TheMovieCurrentPage:",TheMovieCurrentPage)
        $('div ul.pagination').parent().remove()

        var pagination = '<div class="row"><ul class="pagination col s8 offset-s4"><li id="chevron_gauche"><a href="#!"><i class="material-icons">chevron_left</i></a></li>'
        for (i = 1; i <= data_receive.total_pages; i++) {
            if (TheMovieCurrentPage == i) {
                pagination += '<li class="waves-effect active" page="' + i + '"><a href="#!">' + i + '</a></li>'
            } else {
                pagination += '<li class="waves-effect" page="' + i + '"><a href="#!">' + i + '</a></li>'
            }
        }
        pagination += '<li class="waves-effect" id="chevron_droite"><a href="#!"><i class="material-icons">chevron_right</i></a></li></ul></div>';
        $('#result').html(pagination + $('#result').html());
        // console.log($('ul.pagination li:not([id^=chevron])'));
        $('ul.pagination li:not([id^=chevron])').on('click', function () {
            // console.log(this)
            $('ul.pagination li.active').removeClass("active")
            $(this).addClass("active")
            TheMovieCurrentPage = $(this).attr("page");

            SearchResult($('#rechercheInput').val(), TheMovieCurrentPage);
            // console.log("$(this).prev().attr('page')",TheMovieCurrentPage.prev().attr("page"))
        });

        $('ul.pagination li#chevron_droite').on('click', function () {
            var CurrentLi = $('ul.pagination li.active')
            console.log(CurrentLi)
            var MaxLi = $('ul.pagination li[page=' + data_receive.total_pages + ']');
            // console.log(MaxLi)
            if (CurrentLi.attr("page") < MaxLi.attr("page")) {
                var NextLi = $('ul.pagination li.active').next()
                $('ul.pagination li.active').removeClass('active')
                NextLi.addClass('active')
                SearchResult($('#rechercheInput').val(), NextLi.attr("page"));
            }
            else {
                SearchResult($('#rechercheInput').val(), CurrentLi.attr("page"));
            }

        });
        $('ul.pagination li#chevron_gauche').on('click', function () {
            var CurrentLi = $('ul.pagination li.active')
            // console.log(CurrentLi)
            if (CurrentLi.attr("page") > 1) {
                var PrevLi = $('ul.pagination li.active').prev()
                $('ul.pagination li.active').removeClass('active')
                PrevLi.addClass('active')
                SearchResult($('#rechercheInput').val(), PrevLi.attr("page"));
            }
            else {
                SearchResult($('#rechercheInput').val(), CurrentLi.attr("page"));
            }
        })
    }

    function SearchResult(titre, liVal) {

        var TheMovieCurrentPage;
        if (liVal != "") {
            TheMovieCurrentPage = liVal;
        } else {
            TheMovieCurrentPage = 1;
        }
        // console.log("encodeURIComponent(titre):",encodeURIComponent(titre))
        // console.log("titre:",titre)
        var data = {
            api_key: apiKey,
            query: titre,//transforme les espaces en %20 pour avoir un format URL
            language: TheMovieLang,
            page: TheMovieCurrentPage
        }
        $.ajax({
            type: "GET",
            dataType: "json",
            data: data,
            url: movieUrl + '/search/movie',
            success: function (data_receive) {
                // console.log(data_receive)
                var dataTab = data_receive.results
                LoadInHtml(dataTab)
                Pagination(data_receive, TheMovieCurrentPage)
                Voicer()
            },
            error: function () {
                alert("Erreur AJAX")
            }
        })

    }

})

function module() {

    $.fn.autosize = function (options) {

        return this;
    }
    //effacer la liste peu importe le click (le click sur la liste déclenché son évènement.
    $(document).click(function () {
        $('.cplList').hide();
    })

    $.fn.autocomplete = function (options) {
        //this ici est un object Jquery et qui représente la collection des éléments retournées par le selecteur
        var defaults = {
            url: "",
            api_key:"Your API key here",
            nbChar: 2,
            propArrayDansData: "results",
            CompleteProp: 'title'
        }
        var conf = $.extend(defaults, options)
        var lang="fr-fr";
        var currentPage=1;
        var sizes=['w92','w154','w185','w342','w500','w780'];




        $('<div class="cplList"></div>').css({
            // position:'absolute',
            "background-color":"lightgrey"

        }).insertAfter(this);



        $('.cplList').hide();



        //this pour implementer la completion sur tout les éléments qui appel la fonction autocomplete
        this.keyup(function (e) {
            if(/^[a-zA-Z]$/.test(e.key)){
                var inputText=$(this);
                if ($(this).val().length >= conf.nbChar) {
                    var data={
                        api_key:conf.api_key,
                        query:$(this).val(),//transforme les espaces en %20 pour avoir un format URL
                        language:lang,
                        page:currentPage
                    }
                    $.ajax({
                        type: "GET",
                        dataType: "json",
                        data: data,
                        url: conf.url,
                        success: function (data_receive) {
                            console.log(data_receive)
                            var Arraydata=data_receive[conf.propArrayDansData]
                            if (Arraydata.length>0){

                                var html="<ul>"
                                $.each(Arraydata.sort().slice(0,10),function (indice,eachOne) {
                                    html+="<li>"+eachOne[conf.CompleteProp]+"</li>"
                                })
                                html+="</ul>"
                                inputText.next().html(html)

                                inputText.next().show()
                            }else{
                                inputText.next().hide()
                            }
                            $('.cplList ul li').on('click',function (e) {
                                // console.log(e);
                                // console.log($(this).html());
                                var value=$(this).html()
                                $('input#rechercheInput').val(value);
                                $('.cplList').hide();
                            })

                        },
                        error: function () {
                            alert("Erreur AJAX")
                        }
                    })

                } else {
                    $('.cplList').hide();
                }
            }

        })
        return this;
    }
}
module($)
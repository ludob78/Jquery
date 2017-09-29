$(document).ready(function () {
    $('#autocompletion').hide();
    $('#autocomplete').keyup(function () {
        var commune = $(this).val();
        console.log(commune)
        var url = "https://geo.api.gouv.fr/communes"
        if (commune != "") {
            $.ajax({
                type: "GET",
                dataType: "json",
                data: {nom: commune},
                url: url,
                success: function (data_receive) {
                    console.log(data_receive)

                    ConstructCommunesList(data_receive)
                },
                error: function () {
                    alert("Erreur AJAX")
                }
            })

        }
    })
    function ConstructCommunesList(tabsCommune) {
        if (tabsCommune.length > 0) {
            $('#autocompletion').children().remove();
            $('#autocompletion').show();
            var html="<ul>";
            for (i = 0; i < 10; i++) {
            // for (i = 0; i < tabsCommune.length; i++) {
                html+='<li>' + tabsCommune[i].nom +' - '+tabsCommune[i].codeDepartement+ '</li>'
            }
            html+="</ul>"
            // console.log($('label[for=autocomplete]').width());
            $('#autocompletion').append(html);
            $('#autocompletion').css({
                "left": ($('label[for=autocomplete]').width()+$('label[for=autocomplete]').offset().left)+"px",

            });
        }
        $('#autocompletion ul li').on('click',function (e) {
            console.log(e);
            console.log($(this).html());
            var value=$(this).html().substring(0,$(this).html().lastIndexOf('-')-1)
            $('input#autocomplete').val(value);
            $('#autocompletion').hide();
        })
    }

})
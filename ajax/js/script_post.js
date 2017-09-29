/////A REVOIR
$(document).ready(function () {
    // Permet de charger un fichier JS dans le DOM
    $.getScript('js/js.js', function () {
        console.log(arguments)
    })
//***************Récupération des data du site et logi de chargement****************//
    $('.overlay').hide().append("<img src='img/loading_apple.gif'>");
    $.ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/posts",
        dataType: "json",
        success: function (data, success, xmlHttpRequest) {
            console.log(data);
            for (i = 0; i < data.length; i++) {
                $("<h2>" + data[i].title + "</h2>").appendTo($('#posts-liste'))
                $("<div><p>" + data[i].body + "</p></div>").appendTo($('#posts-liste'))
                $("<button name='modifier' id='" + data[i].id + "'>Modifier</button>").appendTo($('#posts-liste'))
                $("<button name='delete' id='" + data[i].id + "'>Supprimer</button>").appendTo($('#posts-liste'))
            }

            $('button[name=edit]').click(function () {
                var title = $(this).prev().prev().html();
                var body = $(this).prev().find('p').html();
                var id = this.id;
                console.log(title)
                $("textarea").val(body);
                $('input[name=post-title]').val(title);
                $('input[type=hidden]').val(id);

                /*
                 console.log(this.id) //this représente l'élément JS
                 console.log($(this).id)//$(this) représente l'élément a sa forme JQuery
                 */

            })

            $('button[name=delete]').click(function () {
                // console.log($(this).parents())
                var id = $(this).id
                console.log(id)
                // console.log(id)
                if (confirm("Voulez vous le supprimer?")){
                    $.ajax({
                        url:"https://jsonplaceholder.typicode.com/posts/"+id,
                        type:"DELETE",
                        success:function (data_return) {
                            console.log("Suppression OK",arguments)
                            $(this).prev().prev().prev().remove();//h2
                            $(this).prev().prev().find('p').remove();//p
                            $(this).prev().remove();//button modifier
                            $(this).remove();//bouton delete
                        }
                    })

                }

            })

            ;
        },
        error: function () {
            alert("erreur");
        },
        beforeSend: function () {
            $('.overlay').show();
            console.log($('.overlay'))

        },
        complete: function () {
            $('.overlay').hide()
        }

    })

//***************FIN Récupération des data du site et logi de chargement****************//


    $('#edit').click(function () {
        console.log($('input[type=hidden]').val())
        var id = $('input[type=hidden]').val()
        $.ajax({
            type: "PUT",
            // url: "traitement.php",
            url: "https://jsonplaceholder.typicode.com/posts/" + id,
            data: {
                id: id,
                title: $('input[type=text]').val(),
                body: $("textarea").val()
            },
            success: function (data_return, success, xmlHttpRequest) {
                console.log(arguments)
                var btn = $("button[id=" + data_return.id + "]")

                btn.prev().prev().html(data_return.title);
                btn.prev().find('p').html(data_return.body);

            },
            dataType: "json"
        })

    })

    var Add= $('button[id=add]');
    // console.log(AddSubmit)
    Add.click(function () {
        var titleContent = $('input[name=post-title]').val();
        // console.log(titleContent)
        var textContent = $('textarea[name=post-body]').val();
        // console.log(textContent)
        var data_send = {
            title: titleContent,
            body: textContent
        }
        // console.log(data);
        $.ajax({
            type: "POST",
            // url: "traitement.php",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: data_send,
            success: function (data_return, success, xmlHttpRequest) {
                console.log("data_return:", data_return)

                // $("<input type='hidden' id=' " + data_return.id + "'</input>").appendTo($('#posts-liste'))
                $("<h2>" + data_return.title + "</h2>").appendTo($('#posts-liste'))
                // $("<div>"+data_return.id + data_return.body + "</div>").appendTo($('#posts-liste'))
                $("<div>" + data_return.body + "</div>").appendTo($('#posts-liste'))
                $("<button name='modifier' id='" + data_return.id + "'>Modifier</button>").appendTo($('#posts-liste'))
                $("<button name='delete' id='" + data_return.id + "'>Supprimer</button>").appendTo($('#posts-liste'))

            },
            dataType: "json"
        })
    })

    /*    $(document).ajaxComplete(function () {
     setTimeout(function () {
     $('.overlay').hide()
     },300)
     })*/
})
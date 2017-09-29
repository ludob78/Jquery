$(document).ready(function () {
    $('.overlay').hide().append("<img src='img/loading_apple.gif'>");
    $.ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/photos",
        success: function (data, success, xmlHttpRequest) {
            console.log(data);
            // function aa() {
                for (i = 0; i < data.length; i++) {
                    $("<div>" + data[i].title + "</div>").appendTo($('body'))
                    $("<img src='" + data[i].thumbnailUrl + "'>").appendTo($('body'))
                }
                ;
            // }
            // $("<div>"+data.propriete+"</div>")
        },
        error: function () {
            alert("erreur");
        },
        beforeSend: function () {
            $('.overlay').show();

        },
        complete:function () {
            $('.overlay').hide()
        }

    })
    // $(document).ajaxComplete(function () {
        // setTimeout(function () {
        //     $('.overlay').hide()
        // },3000)
    // })
})
$(document).ready(function () {
    var height=(innerHeight-$('iframe').offset().top)
    console.log(innerHeight)
    // console.log($('body').height())
    console.log($('iframe').offset().top)
    $('body').css({
        // margin:"0",
        // "box-sizing":"border"
        // overflow:"hidden"

    })
    $('iframe').css({
        width:"100%",
        height:height,
        // overflow:"hidden"
    })
    $.ajax({
        type:"GET",
        url:"https://newsapi.org/v1/sources",
        dataType:"json",
        success:function (data) {
            console.log(data);
            var sources=data.sources;
            for (i=0;i<sources.length;i++){

                $('<option value="'+sources[i].url+'">'+sources[i].name+'</option>').appendTo($('select[name=newsSelect]'));


            }
            $('option[selected=true]').val(sources[0].name)
            $('iframe').attr("src",sources[0].url)
            // console.log(arguments);
        }
    })

    $('select').change(function () {
        console.log($(this).val())
        $('iframe').attr("src",$(this).val())
    })

});
function Voicer(responseContent,Lang) {
    var audio = new Audio()

    // $('p.resume').on('mouseenter',function () {
    // console.log($('p.resume').html())
    //  $.speech({
    var data = {
        key: 'f9dd0457e9d04e8c99c344f1458720fd',
        src:responseContent,
        hl: Lang,
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

    // })
}

document.addEventListener('DOMContentLoaded', function () {

    $("#lang").on('change',function () {
       console.log($(this))
        $(this).addClass('active')
    })
    $("#getContent").on('click', function () {
        if ($("#lang.active").val()==null)lang='fr-fr'
        else lang=$("#lang.active").val()

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
        // var data={selector: $("#selector").val()}
        var data={selector: $("#selector").val()}
            console.log(data)
            console.log(tabs)
            chrome.tabs.sendMessage(tabs[0].id, data, function (response) {
                Voicer(response.content,lang);
                $("#url").html(response.content);
                console.log("$(this).val() de GetContent:", response)
            });
        });

    });
/*    chrome.tabs.getSelected(null, function (tab) {
        console.log(tab);
        document.getElementById("url").innerHTML = tab.url;
        console.log(tab, tab.url);
        chrome.tabs.insertCSS(tab.id, {file: "css/ForcedCss.css"});
        console.log(chrome);
        chrome.tabs.sendMessage(tab.id, {idElement: "url"}, function (response) {
            console.log("response popup:", response)
        })
    });*/
});
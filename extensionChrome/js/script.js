    console.log("JS loaded from extension");

    window.addEventListener('load',function () {
// $(document).on('load',function () {
    console.log(this,"load");
   /* chrome.tabs.getSelected(null,function (tab) {
        console.log(tab.url);
        console.log(tab);


    })*/

        // console.log("chrome scrpit:",chrome)
});
    chrome.extension.onMessage.addListener(function (data,idObj,cb) {
        console.log(arguments);

        cb({content:window.getSelection().toString()});


       // cb({content:$(data.selector).html()})
       // Voicer($(data.selector));


    });
/*$(window).keyup(function (e) {
    if (e.key=="Enter"){
        console.log({a:e})
        if (e.ctrlKey)window.location.href="http://www.google.fr/mail"
        else window.location.href="http://www.google.fr"
    }
})*/

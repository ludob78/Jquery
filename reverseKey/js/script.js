$(document).ready(function () {
    $('input').keypress(function (e) {
        console.log(e)
        console.log(e.key)
        console.log(e.keyCode)

        if (e.key=="a"){
            $(this).val($(this).val()+"b");
            return false
        }else
            if (e.key=="b"){
                $(this).val($(this).val()+"a");
                return false
            }
           /* else if (e.keyCode >=65 && e.keyCode<=90){
                $(this).val($(this).val()+e.key)

            }*/
            // else {return true}



    })
    /*$('input').keydown(function (e) {
        console.log(e)
        console.log(e.key)
        console.log(e.keyCode)
        if (e.key=="a"){
            $(this).val($(this).val()+"b");
            return false
        }else
        if (e.key=="b"){
            $(this).val($(this).val()+"a");
            return false
        }
       /!* else if (e.keyCode >=65 && e.keyCode<=90){
            $(this).val($(this).val()+e.key)

        }*!/
        // else {return true}

    })*/
})
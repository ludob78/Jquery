$(document).ready(function () {
$('input[type=checkbox]').each(function () {
       $(this).hide();
       $('<img src="./img/off.png" class="customCheckbox">').insertBefore($(this));
   });
$('.customCheckbox').click(function () {
   var checkBox=$(this).next();
   if(checkBox.is(':checked')){
       checkBox.prop("checked",false);
       this.src='./img/off.png';
   }else {
       checkBox.prop("checked",true);
       $(this).attr('src','./img/on.png');
   }
});
$('input[type="submit"]').click(function (e) {
    e.preventDefault();
    var res=[];
    $('input[type=checkbox]:checked').each(function () {
       res.push($(this).val());
    });
    console.log(res);
})


});
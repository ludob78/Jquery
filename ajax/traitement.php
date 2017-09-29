<?php
//var_dump($_POST);
/*$data='{
            "title":titleContent,
            "body":textContent
        }';*/
$body = file_get_contents("php://input");
//print_r($_GET);
//print_r($_POST);
//print_r(json_decode($body));
print_r(json_decode($data));

return json_decode($body);
//$data=$_POST['title'].' '.$_POST['content'];
//return var_dump(json_decode($_POST));;
?>
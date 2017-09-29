<?php
$filname = "D:/web/wamp64/www/FormationDL/JQUERY/jquery/Ludo/checkBox/img/off.png";
$fileContent = file_get_contents($filname);
echo base64_encode($fileContent);

<?php
$seed = time();
$num = rand(1,2);
$picpath = "http://api.boleit.github.io/api/img/ (".$num.").jpg";
die(header("Location: $picpath"));
?>
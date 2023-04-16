<?php
$seed = time();
$num = rand(1,4);
$picpath = "http://boleit.github.io/api/img/ (".$num.").jpg";
die(header("Location: $picpath"));
?>
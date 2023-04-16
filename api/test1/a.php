<?php
$seed = time();
$num = rand(1,4);
$picpath = "https://boleit.github.io/api/test1/img/ (".$num.").jpg";
die(header("Location: $picpath"));
?>

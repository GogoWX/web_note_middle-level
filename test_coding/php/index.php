<?php
header('Content-Type: text/event-stream');
header('Catch-control: no-catch');
$time = date('r');
echo "data: The server time is: $time\n\n";
flush();
?>
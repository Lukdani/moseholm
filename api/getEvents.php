<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$sql = "SELECT * FROM events WHERE 1=1 ";

$categories = $db->sql($sql);

echo json_encode($categories);

?>
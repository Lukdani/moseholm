<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$queryParams = $_SERVER['QUERY_STRING'];

$sql = "SELECT * FROM categories";

$categories = $db->sql($sql);

header('HTTP/1.1 200 OK');
echo json_encode($categories);
?>
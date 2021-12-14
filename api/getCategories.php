<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$queryParams = $_SERVER['QUERY_STRING'];


$sql = "SELECT * FROM categories";

$categories = $db->sql($sql);

echo json_encode($categories);

?>
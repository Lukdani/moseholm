<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$sql = "SELECT * FROM events WHERE eventDate > CURRENT_DATE OR eventDate = CURRENT_DATE ";

if (isset($_GET["orderBy"]) && isset($_GET["direction"])) {
$sql .= "ORDER BY " . $_GET["orderBy"] . " " . $_GET["direction"];
}
$events = $db->sql($sql);

echo json_encode($events);

?>
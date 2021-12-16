<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$sql = "SELECT * FROM products P LEFT JOIN categories C on P.prodCategoryId = C.catId WHERE 1=1 ";
$bind = [];

if (isset($_GET["categories"])) {
    $categoriesArray = explode(",", $_GET["categories"]);
    $sql .= "AND catKey IN ('".implode("','",$categoriesArray)."')";
   //$bind[":categories"] = implode("','", $categoriesArray);
   //echo(implode("','", $categoriesArray));
}

$products = $db->sql($sql, $bind);
header("HTTP/1.1 200 OK");

echo json_encode($products);

?>
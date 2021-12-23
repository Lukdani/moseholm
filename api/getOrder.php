<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$sql;

// Return a single event based on passed query param;
if (isset($_GET["orderId"])) {
  // Setup query and join relevant comments;
  $order = "SELECT * FROM orders o WHERE orderId = " . $_GET["orderId"];

  // Fetch the events;
  $orders = $db->sql($order);

  // Create query to get eventComments and fetch the comments;;
  $productsSql =
    "SELECT * from order_product O INNER JOIN products P on O.prodId = P.prodId WHERE O.orderId = " .
    $_GET["orderId"];

  $products = $db->sql($productsSql);

  // Add the comments to the event result;
  $orders[0]->products = $products;

  // Return the result;
  echo json_encode($orders[0]);
}

?>
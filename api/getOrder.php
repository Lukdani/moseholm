<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$sql;

// Return a single event based on passed query param;
if (isset($_GET["orderId"])) {
  // Setup query and join relevant comments;
  $order =
    "SELECT * FROM orders o WHERE orderId = " . $_GET["orderId"] . " LIMIT 1";

  // Fetch the order;
  $orders = $db->sql($order);

  // Create query to get relating products and fetch the products;
  $productsSql =
    "SELECT * from order_product O INNER JOIN products P on O.prodId = P.prodId WHERE O.orderId = " .
    $_GET["orderId"];

  $products = $db->sql($productsSql);

  // Add the products to the order object;
  $orders[0]->products = $products;

  // Return the order;
  header("HTTP/1.1 200 Ok");
  echo json_encode($orders[0]);
} else {
  header('HTTP/1.1 400 Bad Request');
  $error["errorMessage"] = "No order id was sent in the request.";
  echo json_encode($error);
}
?>
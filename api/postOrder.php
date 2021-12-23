<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$postData = json_decode(file_get_contents('php://input'));

$orderId;

if (!empty($postData)) {
  if (isset($postData->customer)) {
    $orderSql =
      "INSERT INTO orders (orderCustomer, orderAddress, orderEmail, orderDate) VALUES(:orderCustomer, :orderAddress, :orderEmail, :orderDate); SELECT orderId FROM orders ORDER BY orderId DESC LIMIT 1";
    $orderBind = [
      ":orderCustomer" => $postData->customer->name,
      ":orderAddress" => $postData->customer->address,
      ":orderEmail" => $postData->customer->email,
      ":orderDate" => gmdate("Y-m-d H:i:s"),
    ];
    $db->sql($orderSql, $orderBind, false);

    $orderIdSql = "SELECT orderId FROM orders ORDER BY orderId DESC LIMIT 1";

    $orderId = $db->sql($orderIdSql, null)[0];
  }

  if (isset($postData->products) && isset($orderId)) {
    foreach ($postData->products as $orderProduct) {
      $order_productSql =
        "INSERT INTO order_product (orderId, prodId, order_product_quantity) VALUES(:orderId, :prodId, :order_product_quantity)";
      $order_productBind = [
        ":orderId" => $orderId->orderId,
        ":prodId" => $orderProduct->product->prodId,
        ":order_product_quantity" => $orderProduct->quantity,
      ];
      $db->sql($order_productSql, $order_productBind, false);
    }
  }

  echo json_encode($orderId->orderId);
} else {
  echo "TEST 2";
}
?>

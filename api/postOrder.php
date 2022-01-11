<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$postData = json_decode(file_get_contents('php://input'));
$orderId;

if (!empty($postData)) {
  if (!isset($postData->customer)) {
    header('HTTP/1.1 400 Bad Request');
    $error["errorMessage"] = "No customer data was found in the request.";
    echo json_encode($error);
    return;
  } elseif (
    !isset($postData->customer->name) ||
    !isset($postData->customer->address) ||
    !isset($postData->customer->email)
  ) {
    header('HTTP/1.1 400 Bad Request');
    $error["errorMessage"] = "Customer info is missing in the request:";
    if (!isset($postData->customer->name)) {
      $error["errorMessage"] .= " Customer name is missing";
    }
    if (!isset($postData->customer->address)) {
      $error["errorMessage"] .= " Customer address is missing";
    }
    if (!isset($postData->customer->email)) {
      $error["errorMessage"] .= " Customer email is missing";
    }

    echo json_encode($error);
    return;
  }

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

  if (!isset($orderId)) {
    header('HTTP/1.1 500 Internal Server Error');
    $error["errorMessage"] =
      "There was an internal server error when retrieving the orderId";
    echo json_encode($error);
    return;
  }

  if (!isset($postData->products)) {
    header('HTTP/1.1 400 Bad Request');
    $error["errorMessage"] = "No products were found in the request.";
    echo json_encode($error);
    return;
  } elseif (isset($postData->products)) {
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
  header("HTTP/1.1 201 Created");
  echo json_encode($orderId->orderId);
} else {
  header('HTTP/1.1 400 Bad Request');
  $error["errorMessage"] = "No data was found in the request.";
  echo json_encode($error);
}
?>
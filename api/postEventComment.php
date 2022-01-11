<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$postData = json_decode(file_get_contents('php://input'));
if (!empty($postData)) {
  $sql =
    "INSERT INTO eventscomments (ecomAuthor, ecomDate, ecomComment, ecomEventId) VALUES(:ecomAuthor, :ecomDate, :ecomComment, :ecomEventId)";
  $bind = [
    ":ecomAuthor" => $postData->ecomAuthor,
    ":ecomDate" => gmdate("Y-m-d H:i:s"),
    ":ecomComment" => $postData->ecomComment,
    ":ecomEventId" => $postData->ecomEventId,
  ];

  $db->sql($sql, $bind, false);
  header("HTTP/1.1 201 Created");
  echo json_encode("success");
} else {
  header('HTTP/1.1 400 Bad Request');
  $error["errorMessage"] = "No data was found in the request.";
  echo json_encode($error);
}
?>
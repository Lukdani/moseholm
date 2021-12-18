<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$postData = json_decode(file_get_contents('php://input'));
if (!empty($postData)) {

    $sql = "INSERT INTO eventscomments (ecomAuthor, ecomDate, ecomComment, ecomEventId) VALUES(:ecomAuthor, :ecomDate, :ecomComment, :ecomEventId)";
    $bind = [
        ":ecomAuthor" => $postData->ecomAuthor, 
        ":ecomDate" => gmdate("Y-m-d H:i:s"), 
        ":ecomComment" => $postData->ecomComment,
        ":ecomEventId" => $postData->ecomEventId,
    ];

    $db->sql( $sql, $bind, false);
    echo(json_encode("success"));

}
else {
    echo("TEST 2");
}
?>
<?php
require $_SERVER['DOCUMENT_ROOT'] . "/moseholm/settings/init.php";

$sql;

// Return a single event based on passed query param;
if (isset($_GET["eventId"])) {
    // Setup query and join relevant comments;
    $eventSql = (
        "SELECT * FROM events e WHERE (e.eventDate > CURRENT_DATE OR e.eventDate = CURRENT_DATE) "
);

    // Add eventId to the query;
    $eventSql .= "AND e.eventId = " . $_GET["eventId"];

    // Fetch the events;
    $events = $db->sql($eventSql);

    // Create query to get eventComments and fetch the comments;;
    $eventCommentsSql = "SELECT * from eventscomments e WHERE e.ecomEventId = " . $_GET["eventId"] . " ORDER BY ecomDate DESC"; 
    $eventComments = $db->sql($eventCommentsSql);

    // Add the comments to the event result;
     $events[0]->eventComments = $eventComments;

    // Return the result;
    echo json_encode($events);
    }

// If orderBy 
else if (isset($_GET["orderBy"]) && isset($_GET["direction"])) {
    $sql = "SELECT * FROM events E WHERE (E.eventDate > CURRENT_DATE OR E.eventDate = CURRENT_DATE) ";
    $sql .= "ORDER BY " . $_GET["orderBy"] . " " . $_GET["direction"];
    $events = $db->sql($sql);
echo json_encode($events);
}
else {
    $sql = "SELECT * FROM events E WHERE (E.eventDate > CURRENT_DATE OR E.eventDate = CURRENT_DATE) ";
    $events = $db->sql($sql);
echo json_encode($events);
}


?>
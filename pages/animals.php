<!--<?php
/*require "settings/init.php";

$blogs = $db->sql("SELECT * FROM blogs");

foreach ($blogs as $blog){
    echo $blog->blogName . "<br>";
}
*/
?>-->

<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - økologisk gårdbutik</title>

    <meta name="robots" content="All" />
    <meta name="author" content="Udgiver" />
    <meta name="copyright" content="Information om copyright" />
    <?php include  $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/dependencies.html" ?>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>
<div id="pageContainer">
        <div id="pageContent">
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/navbar.html" ?>
    <div class="container-lg">
        <div class="row section">

    
        <div class="col-12">
        <h2 class="section-header">
            Kom og mød vores dejlige dyr.
            <br>
            De er nysgerrige og elsker børn.</h2>
        </div>
    
  


            <div class="col-12">
  <img  src="/moseholm/images/animals/animal.png" alt="Et at vores dejlige dyr her på gården">
            </div>
        </div>
    </div>
</div>
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/footer.html" ?>
    </div>
</body>

</html>
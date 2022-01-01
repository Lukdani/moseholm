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
                <div class="row eggGame">
                    <div class="col-12 eggGame-col">
                        <div id="eggGame-instructions">
                            <h2>
                                Hjælp Moster Oda!
                            </h2>
                            <p>
                                Den frække skov-nisse er i fuld gang med at gemme Moster Odas æg.
                                <br>
                                Moster Oda har nu brug for din hjælp til at finde æggene.
                                <br>
                                Læg mærke til, hvor æggene bliver gemt, og prøv så at finde dem.
                            </p>
                        </div>
                    </div>
                    <div class="col-12" id="eggGame-indicators">


                    </div>
                    <div id="eggGame-container">

                    </div>
                </div>
            </div>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/footer.html" ?>
    </div>
    <script type="module" src="/moseholm/js/setShoppingCartCount.js">
    </script>
    <script type="module" src="/moseholm/js/eggGameInitializer.js">
    </script>
</body>

</html>
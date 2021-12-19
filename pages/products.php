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


                    <div class="col-10 offset-lg-2">
                        <h2 class="page-feature-header">
                            Økologi og lokalt

                        </h2>
                        <p class="page-feature-teaser">
                            Alle produkter i vores gårdbutik er fremstillet på vores gård og er 100 % økologiske.
                            <br>
                            Vi ønsker at bekæmpe madspil, så hos os finder du krumme agurker og
                            skæve løg.
                        </p>
                    </div>



                    <div id="categoriesContainer" class="col-12 col-lg-2 pt-2">

                    </div>
                    <div class="col-12 col-lg-10">
                        <div id="productsContainer" class="row">
                        </div>

                        <div class="spinner hidden" id="productSpinner">
                            <i class="fas fa-tractor fa-spin "></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/footer.html" ?>
    </div>

    <script type="module" src="/moseholm/js/products.js"></script>

</body>

</html>
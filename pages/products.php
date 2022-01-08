<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - økologisk gårdbutik</title>

    <!--META -->
    <meta name="robots" content="All" />
    <meta name="author" content="Udgiver" />
    <meta name="copyright" content="Information om copyright" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Oversigt over produkter, som sælges i Moseholms gårdbutik" />
    <meta name="keywords" content="økologi, gårdbutik, familie, shopping" />
    <meta name="robots" content="index,follow" />
    <meta property="og:title" content="Moseholm - økologisk gårdbutik" />
    <meta property="og:image" content="" />
    <meta property="og:description" content="Oversigt over produkter, som sælges i Moseholms gårdbutik" />
    <?php include $_SERVER['DOCUMENT_ROOT'] .
      "/moseholm/includes/dependencies.html"; ?>


</head>

<body>
    <div id="pageContainer">
        <?php include $_SERVER['DOCUMENT_ROOT'] .
          "/moseholm/includes/navbar.html"; ?>
        <div id="pageContent">

            <div class="container-lg">
                <div class="row">
                    <div class="col-10 offset-lg-2">
                        <h2 class="page-feature-header">
                            Økologisk og lokalt

                        </h2>
                        <p class="page-feature-teaser">
                            Alle produkter i vores gårdbutik er fremstillet på vores gård og er <strong>100 %
                                økologiske</strong>.
                            <br>
                            Vi ønsker at bekæmpe <strong>madspil</strong>, så hos os finder du krumme agurker og
                            skæve løg.
                        </p>
                    </div>

                    <div id="categoriesContainer" class="col-12 col-lg-2 pt-2">
                    </div>

                    <div class="col-12 col-lg-10">
                        <div id="productsContainer" class="row g-2">
                        </div>

                        <div class="spinner hidden" id="productSpinner">
                            <i class="fas fa-tractor fa-spin "></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] .
          "/moseholm/includes/footer.html"; ?>
    </div>

    <script type="module" src="/moseholm/js/products.js"></script>

</body>

</html>
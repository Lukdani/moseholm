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
                <div class="row" id="shoppingCartRow">

                    <div class="col-12" id="shopping-cart-header">
                        <h2 class="page-feature-header">
                            Din indkøbsvogn
                        </h2>
                    </div>

                    <div class="col-12" id="shoppingCartContainer-col">
                        <div id="shoppingCartContainer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] .
          "/moseholm/includes/footer.html"; ?>
    </div>

    <script type="module" src="/moseholm/js/shoppingCartInitializer.js"></script>

</body>

</html>
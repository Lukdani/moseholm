<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - Æggespillet</title>

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
                    <h3>Hjælp Moster Oda - hvor er æggene?</h3>
                    <div class="col-12" id="eggGame-indicators">
                        <div id="gamePanel">
                            <div class="gamePanel-item" id="triesLeftIndicator-container">
                                <span>Forsøg tilbage: </span>
                                <span id="triesLeftIndicator"></span>
                            </div>

                            <div class="gamePanel-item" id="targetsFoundIndicator-container">
                                <span>Fundne æg</span>
                                <span id="targetsFoundIndicator"></span>

                            </div>
                        </div>
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
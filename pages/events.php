<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - Økologisk gårdbutik</title>

    <meta name="robots" content="All" />
    <meta name="author" content="Udgiver" />
    <meta name="copyright" content="Information om copyright" />
    <?php include $_SERVER['DOCUMENT_ROOT'] .
      "/moseholm/includes/dependencies.html"; ?>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>
    <div id="pageContainer">
        <div id="pageContent">
            <?php include $_SERVER['DOCUMENT_ROOT'] .
              "/moseholm/includes/navbar.html"; ?>
            <div class="container-lg">
                <div class="row">
                    <div class="col-12 col-lg-10 offset-lg-2">
                        <h2 class="page-feature-header">
                            Giv familien en rigtig landoplevelse
                        </h2>
                        <p class="page-feature-teaser">
                            Du og familien kan altid <strong>kæle med gårdens dyr</strong> og komme med ud at
                            <strong>fodre</strong>.
                            <br>
                            <br>
                            Vi har derudover løbende <strong>særlige events</strong>:
                        </p>
                    </div>

                    <div id="orderByContainer" class="col-12 col-lg-2">

                    </div>

                    <div class="col-12 col-lg-10">
                        <div id="eventsContainer" class="row g-3">
                        </div>

                        <div class="spinner hidden" id="eventSpinner">
                            <i class="fas fa-tractor fa-spin "></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] .
          "/moseholm/includes/footer.html"; ?>
    </div>

    <script type="module">
    import {
        EventInitializer
    } from "/moseholm/js/eventInitializer.js";
    const eventInitializer = new EventInitializer("4", true);
    </script>
    <script type="module" src="/moseholm/js/setShoppingCartCount.js">

    </script>

</body>

</html>
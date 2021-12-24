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
    <meta name="description" content="Forside med oversigt over produktkategorier og kommende events." />
    <meta name="keywords" content="økologi, gårdbutik, familie" />
    <meta name="robots" content="index,follow" />
    <meta property="og:title" content="Moseholm - økologisk gårdbutik" />
    <meta property="og:image" content="" />
    <meta property="og:description"
        content="Moseholm er en økologisk gårdbutik, som sælger produkter fra egen produktion. Moseholm har også en café og afholder løbende events." />

    <?php include $_SERVER['DOCUMENT_ROOT'] .
      "/moseholm/includes/dependencies.html"; ?>

</head>

<body>
    <div id="pageContainer">
        <?php include "./includes/navbar.html"; ?>
        <div id="pageContent">
            <header class="heroContainer" role="banner">
                <video id="heroVideo" loop muted autoplay>
                    <source src="/moseholm/videos/hero_desktop.mp4" type="video/mp4" />
                </video>

                <div class="hero overlay">
                    <div class="overlay-text">
                        <h1 class="mb-2">Landoplevelse for hele familien</h1>
                        <p class="mb-3">
                            Moseholm er en 100% økologisk gårdbutik.
                            <br>
                            Besøg vores café og hils på vores skønne dyr.

                        </p>
                        <a href="/moseholm/pages/products.php" class="btn btn-primary"><i class="fas fa-shopping-cart"></i>Se vores produkter</a>
                    </div>
                </div>
            </header>

            <div class="section">
                <div class="container-lg">
                    <div class="row space-evenly">
                        <h1 class="section-header">Vores produkter</h1>
                        <div class="col-12 col-lg-4 col-space category-overview-container">
                            <a href="/moseholm/pages/products.php?categories=colonial">
                                <div class="category-overview-item">
                                    <i class="fas fa-seedling"></i>
                                    <i class="fas fa-seedling"></i>
                                    <i class="fas fa-seedling"></i>
                                    <i class="fas fa-seedling"></i>
                                    <i class="fas fa-seedling"></i>
                                    <i class="fas fa-seedling"></i>
                                    <i class="fas fa-seedling"></i>
                                    <p>Kolonial</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-lg-4 col-space category-overview-container">
                            <a href="/moseholm/pages/products.php?categories=dairy">
                                <div class="category-overview-item">
                                    <i class="fas fa-egg"></i>
                                    <i class="fas fa-egg"></i>
                                    <i class="fas fa-egg"></i>
                                    <i class="fas fa-egg"></i>
                                    <i class="fas fa-egg"></i>
                                    <i class="fas fa-egg"></i>
                                    <i class="fas fa-egg"></i>
                                    <p>Mejeri</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-lg-4 col-space category-overview-container">
                            <a href="/moseholm/pages/products.php?categories=bread">
                                <div class="category-overview-item">
                                    <i class="fas fa-bread-slice"></i>
                                    <i class="fas fa-bread-slice"></i>
                                    <i class="fas fa-bread-slice"></i>
                                    <i class="fas fa-bread-slice"></i>
                                    <i class="fas fa-bread-slice"></i>
                                    <i class="fas fa-bread-slice"></i>
                                    <i class="fas fa-bread-slice"></i>
                                    <p>Brød</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-lg-4 col-space category-overview-container">
                            <a href="/moseholm/pages/products.php?categories=fruit">
                                <div class="category-overview-item">
                                    <i class="fas fa-apple-alt"></i>
                                    <i class="fas fa-apple-alt"></i>
                                    <i class="fas fa-apple-alt"></i>
                                    <i class="fas fa-apple-alt"></i>
                                    <i class="fas fa-apple-alt"></i>
                                    <i class="fas fa-apple-alt"></i>
                                    <i class="fas fa-apple-alt"></i>
                                    <p>Frugt</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-lg-4 col-space category-overview-container">
                            <a href="/moseholm/pages/products.php?categories=vegetables">
                                <div class="category-overview-item">
                                    <i class="fas fa-carrot"></i>
                                    <i class="fas fa-carrot"></i>
                                    <i class="fas fa-carrot"></i>
                                    <i class="fas fa-carrot"></i>
                                    <i class="fas fa-carrot"></i>
                                    <i class="fas fa-carrot"></i>
                                    <i class="fas fa-carrot"></i>
                                    <p>Grøntsager</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-lg-4 col-space category-overview-container">
                            <a href="/moseholm/pages/products.php?categories=meat">
                                <div class="category-overview-item">
                                    <i class="fas fa-drumstick-bite"></i>
                                    <i class="fas fa-drumstick-bite"></i>
                                    <i class="fas fa-drumstick-bite"></i>
                                    <i class="fas fa-drumstick-bite"></i>
                                    <i class="fas fa-drumstick-bite"></i>
                                    <i class="fas fa-drumstick-bite"></i>
                                    <i class="fas fa-drumstick-bite"></i>
                                    <p>Kød</p>
                                </div>
                            </a>
                        </div>


                    </div>
                    <div class="row">
                        <div class="col-12" style="text-align: center;">
                            <a href="/moseholm/pages/products.php" class="btn-secondary btn mt-4"><i
                                    class="fas fa-shopping-cart"></i>Se alle produkter</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section features overlay overlay--light">


                <div class="container-lg">
                    <div class="row overlay-text">
                        <h1 class="section-header overlay-text">Besøg os fordi...</h1>
                        <div class="col-12 offset-lg-2 col-lg-8 features-points-container overlay-text">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><i class="fas fa-check-square"></td>
                                        <td>100% økologisk og lokalt fremstillede produkter</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-check-square"></td>
                                        <td>Nyd en hyggelig stund i vores atmosfæriske café</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-check-square"></td>
                                        <td>Besøg vores søde og nysgerrige dyr</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-check-square"></td>
                                        <td>Deltag i et event og få en autentisk landoplevelse</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </span>
            </div>
            <div class="events section">
                <h1 class="section-header text-light">Kommende events</h1>
                <div class="container-lg">


                    <div id="eventsContainer" class="row">

                    </div>
                    <div class="spinner hidden" id="eventSpinner">
                        <i class="fas fa-tractor fa-spin "></i>
                    </div>
                    <div class="row">
                        <div class="col-12" style="text-align: center;">
                            <a href="/moseholm/pages/events.php" class="btn-secondary btn mt-4"><i
                                    class="fas fa-calendar-week"></i>Se alle events</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <?php include "./includes/footer.html"; ?>

    </div>

    <script type="module">
    import {
        EventInitializer
    } from "/moseholm/js/eventInitializer.js";
    const eventInitializer = new EventInitializer("4", false, "ASC");
    </script>
    <script type="module" src="/moseholm/js/setShoppingCartCount.js">

    </script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
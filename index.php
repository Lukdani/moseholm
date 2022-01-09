<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title data-translationkey="titleFrontPage">Moseholm - økologisk gårdbutik</title>

    <!--META -->
    <meta name="author" content="Udgiver" />
    <meta name="copyright" content="Information om copyright" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Forside med oversigt over produktkategorier og kommende events." />
    <meta name="keywords" content="økologi, gårdbutik, familie" />
    <meta name="robots" content="index,follow" />

    <!-- Open Graph -->
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
        <div id="pageContent" class="pageContent--disableSpacing">
            <header class="heroContainer">
                <video id="heroVideo" loop muted>
                    <source id="heroVideoSource" src="/moseholm/videos/hero_mobile.mp4" type="video/mp4" />
                </video>

                <div class="hero overlay ">
                    <div class="overlay-text">
                        <h1 data-translationkey="heroHeader" class="mb-2">Landoplevelse for hele familien</h1>
                        <p class="mb-3">
                            <span data-translationkey="heroText1">
                                Moseholm er en 100% økologisk gårdbutik.
                            </span>
                            <br>
                            <span data-translationkey="heroText2">
                                Besøg vores café og hils på vores skønne dyr.
                            </span>
                        </p>
                        <a data-translationkey="shopNow" href="/moseholm/pages/products.php" class="btn btn-primary"><i
                                class="fas fa-shopping-cart"></i>Shop nu</a>
                    </div>
                </div>
            </header>

            <div class="section">
                <div class="container-lg">
                    <div class="row space-evenly">
                        <h1 class="section-header" data-translationkey="ourProducts">Vores produkter</h1>
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
                                    <p data-translationkey="colonial">Kolonial</p>
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
                                    <p data-translationkey="dairy">Mejeri</p>
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
                                    <p data-translationkey="bread">Brød</p>
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
                                    <p data-translationkey="fruit">Frugt</p>
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
                                    <p data-translationkey="vegetables">Grøntsager</p>
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
                                    <p data-translationkey="meat">Kød</p>
                                </div>
                            </a>
                        </div>


                    </div>
                    <div class="row">
                        <div class="col-12" style="text-align: center;">
                            <a data-translationkey="viewAllProducts" href="/moseholm/pages/products.php"
                                class="btn-secondary btn mt-4"><i class="fas fa-shopping-cart"></i>Se alle produkter</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section features overlay overlay--light">


                <div class="container-lg">
                    <div class="row overlay-text">
                        <h1 data-translationkey="visitBecause" class="section-header overlay-text">Besøg os fordi...
                        </h1>
                        <div class="col-12 offset-lg-2 col-lg-8 features-points-container overlay-text">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><i class="fas fa-check-square"></i></td>
                                        <td data-translationkey="hundredOrganic">100% økologisk og lokalt fremstillede
                                            produkter</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-check-square"></i></td>
                                        <td data-translationkey="enjoyCafe">Nyd en hyggelig stund i vores atmosfæriske
                                            café</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-check-square"></i></td>
                                        <td data-translationkey="visitAnimals">Besøg vores søde og nysgerrige dyr</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-check-square"></i></td>
                                        <td data-translationkey="participateEvent">Deltag i et event og få en autentisk
                                            landoplevelse</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="events section">
                <h1 data-translationkey="comingEvents" class="section-header text-light">Kommende events</h1>
                <div class="container-lg">


                    <div id="eventsContainer" class="row  g-3">

                    </div>
                    <div class="spinner hidden" id="eventSpinner">
                        <i class="fas fa-tractor fa-spin "></i>
                    </div>
                    <div class="row">
                        <div class="col-12" style="text-align: center;">
                            <button data-translationkey="threeMore" id="loadMoreEventsButton"
                                class="btnGray btn mt-4 me-2"><i class="fas fa-plus"></i>Indlæs 3 mere</button>
                            <a data-translationkey="viewAllEvents" href="/moseholm/pages/events.php"
                                class="btn-secondary btn mt-4"><i class="fas fa-calendar-week"></i>Se alle events</a>
                        </div>
                    </div>

                </div>
            </div>
            <div class="section">

                <div class="container-lg">
                    <div class="row ">

                        <div class="col-12 offset-lg-2 col-lg-8 eggGame-teaser">
                            <span>
                                <h1 data-translationkey="helpAuntOda" class="section-header">Hjælp Moster Oda!</h1>
                                <div class="eggGame-teaser-textContainer">
                                    <img height="100" src="/moseholm/images/skovnisse.png"
                                        alt="Den frække skovnissen som har stjålet Moster Odas æg">

                                    <p data-translationkey="naughtyGoblin">Den frække skovnisse er igang med at skjule
                                        Moster Odas 3 æg.
                                    </p>
                                    <p data-translationkey="helpReturnEggs">
                                        Hjælp Moster Oda med at få æggene tilbage, så hun kan bage!
                                    </p>
                                </div>
                                <a data-translationkey="imReady" class="btn btn-secondary mt-2"
                                    href="/moseholm/pages/eggGame.php">Jeg er klar!</a>
                            </span>
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
    const eventInitializer = new EventInitializer("4", false, "eventDate", "ASC", true);
    </script>
    <script type="module" src="/moseholm/js/setShoppingCartCount.js">
    </script>

    <script type="module">
    import {
        WindowResizeHandler
    } from "/moseholm/utils/WindowResizeHandler.js";

    const handleResize = (isMobile) => {
        const video = document.getElementById("heroVideo");
        const videoSource = document.getElementById("heroVideoSource");
        if (videoSource && video) {
            video.pause();
            videoSource.src = `/moseholm/videos/hero_${(isMobile ? "mobile" :"desktop")}.mp4`;
            video.load();
            video.play();
        }
    }

    const windowResizeHandler = new WindowResizeHandler(handleResize, true);
    </script>
</body>

</html>
<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - caféen</title>
    <meta name="robots" content="index,follow" />
    <meta name="author" content="Udgiver" />
    <meta name="copyright" content="Information om copyright" />
    <?php include $_SERVER['DOCUMENT_ROOT'] .
      "/moseholm/includes/dependencies.html"; ?>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Oplysninger om Moseholms gårdbutik og cafe samt priser" />
    <meta name="keywords" content="dyr, gårdbutik, familietur" />
    <meta name="robots" content="index,follow" />

    <!-- Open Graph -->
    <meta property="og:title" content="Moseholm - økologisk gårdbutik" />
    <meta property="og:image" content="" />
    <meta property="og:description"
        content="Moseholm er en økologisk gårdbutik, som sælger produkter fra egen produktion. Moseholm har også en café og afholder løbende events." />

</head>

<body>
    <?php include $_SERVER['DOCUMENT_ROOT'] .
      "/moseholm/includes/navbar.html"; ?>
    <div id="pageContainer">
        <div id="pageContent">
            <div class="container-lg">
                <div class="row pb-0">
                    <div class="col-12">
                        <h2 class="section-header pb-3">
                            Om caféen
                        </h2>
                    </div>
                </div>
                <div class="row mb-4">
                    <div id="cafeen" class="row mb-4 navbar-spacer">
                        <div class="col-12">
                            <div class="about-content about-content--cafe">
                                <div class="about-content-text">
                                    <h4>Caféens historie</h4>
                                    <p>
                                        Siden 2012 har vi haft café på gården. Caféen har åben hver dag inden for
                                        Moseholms almindelige <a class="hyperlink"
                                            href="#openingHours">åbningstider</a>.
                                        <br>
                                        <br>
                                        Caféens adresse er <a class="hyperlink"
                                            href="https://goo.gl/maps/B1nh3TsDH9H6SzQf7" target="_blank">Gunderslevvej
                                            2, 4250 Fuglebjerg</a>.
                                        <br>
                                        <br>
                                        I caféen kan man smage mange af de <a class="hyperlink"
                                            href="/moseholm/pages/products.php">produkter</a>, vi sælger i gårdbutiken
                                        og i webshoppen.
                                        <br>
                                        <br>
                                        Derudover har vi følgende faste sortiment:
                                    </p>
                                    <br>
                                    <h4>Priser</h4>

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Filterkaffe</td>
                                                <td>30 kr.</td>
                                            </tr>
                                            <tr>
                                                <td>Cafe Latte
                                                    <br>
                                                    <span class="text-muted">(Få også med havremælk)</span>
                                                </td>
                                                <td>50 kr.</td>
                                            </tr>
                                            <tr>
                                                <td>Urte-te</td>
                                                <td>25 kr.</td>
                                            </tr>
                                            <tr>
                                                <td>Hjemmelavet æblekage</td>
                                                <td>40 kr.</td>
                                            </tr>
                                            <tr>
                                                <td>Dagens kage</td>
                                                <td>40 kr.</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include $_SERVER['DOCUMENT_ROOT'] .
          "/moseholm/includes/footer.html"; ?>
    </div>
    <script type="module" src="/moseholm/js/setShoppingCartCount.js">
    </script>
    <script type="module">
    const headers = document.querySelectorAll(".about-header");
    headers?.forEach(headerItem => {
        headerItem.style["margin-top"] =
            `-${headerItem.offsetHeight /2 }px`; // Needed to compensate for transform:translateY;
    })
    </script>

</body>

</html>
<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - Om Moseholm</title>
    <meta name="robots" content="index,follow" />
    <meta name="author" content="Udgiver" />
    <meta name="copyright" content="Information om copyright" />
    <?php include  $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/dependencies.html" ?>

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
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/navbar.html" ?>
    <div id="pageContainer">

        <div id="pageContent">
            <div class="container-lg">
                <div class="row pb-0">
                    <div class="col-12">
                        <h2 class="section-header pb-0">
                            Om Moseholm
                        </h2>
                    </div>
                </div>
                <div class="row mb-4">

                    <div class="col-12">
                        <h3 class="about-header"><i class="fas fa-tractor"></i> Bæredygtige traditioner</h3>
                        <div class="about-content about-content--moseholm">
                            <div class="about-content-text">
                                <h4>Bæredygtige traditioner</h4>
                                <p>
                                    Hos Moseholm tror vi på, at vi kan dyrke de gamle traditioner på en bæredygtig
                                    måde.
                                    <br>
                                    <br>
                                </p>
                                <ul>
                                    <li>Hvis vi giver tid til at lade afgrøderne modne.</li>
                                    <li>
                                        Hvis vi kun dyrker det, vi spiser.
                                    </li>

                                    <li>
                                        Hvis planter fylder mere i vores kost.
                                    </li>
                                </ul>
                                <h4>Vores mission</h4>
                                <br>
                                <p>
                                    Formidlingen af det skønne ved vores stolte traditioner, respekten for gårdens dyr
                                    og fordybelse er en vigtig del af vores mission om at sprede kendskabet til
                                    økologisk fødevareproduktion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="butikken" class="row mb-4 navbar-spacer">
                    <div class="col-12">
                        <h3 class="about-header"><i class="fas fa-store"></i> Om Gårdbutikken</h3>
                        <div class="about-content about-content--store">
                            <div class="about-content-text">

                                <h4>Gårdbutikkens historie</h4>
                                <p>
                                    Gårdbutikken har eksisteret siden 1962.
                                    <br>
                                    <br>
                                    Den har altid fungeret som
                                    udstillingsvindue for de
                                    skønne produkter, man kan skabe uden brug af pesticider, kunstig foder og
                                    manglende
                                    plads
                                    til de skønne dyr.
                                </p>
                                <br>
                                <h4>Fremstilling af produkterne</h4>
                                <p>
                                    Alle varerne i gårdbutikken er fremstillet her på gården og afspejler
                                    årstiden.
                                    <br>
                                    <br>
                                    Vores produkter kan smages i vores <a class="customLink" href="#cafeen">café.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cafeen" class="row mb-4 navbar-spacer">
                    <div class="col-12">
                        <h3 class="about-header"><i class="fas fa-coffee"></i> Caféen</h3>
                        <div class="about-content about-content--cafe">
                            <div class="about-content-text">
                                <h4>Caféens historie</h4>
                                <p>
                                    Siden 2012 har vi haft en café på gården, som har åbent hver dag.
                                    <br>
                                    I caféen kan man smage mange af de produkter, vi sælger i gårdbutiken.
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
        <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/footer.html" ?>
    </div>
    <script type="module" src="/moseholm/js/setShoppingCartCount.js">
    </script>
    <script type="module">
    const headers = document.querySelectorAll(".about-header");
    headers?.forEach(headerItem => {
        headerItem.style["margin-top"] =
            `-${headerItem.offsetHeight /2 }px`; // Needed to compensate for transform:translateY - Lukas 05/01/21
    })
    </script>
</body>

</html>
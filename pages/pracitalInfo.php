<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - praktisk info</title>

    <meta name="robots" content="index,follow" />
    <meta name="author" content="Udgiver" />
    <meta name="copyright" content="Information om copyright" />
    <?php include $_SERVER['DOCUMENT_ROOT'] .
      "/moseholm/includes/dependencies.html"; ?>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Praktisk info om besøg på Moseholm" />
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
            <div class="container-lg praticalInfo">
                <div class="row pb-0">
                    <div class="col-12">
                        <h2 class="section-header pb-0">
                            Praktisk info
                        </h2>
                        <p class="mb-3 center-align praticalInfo-introduction">
                            Læs nedenfor, hvad der er godt at vide, inden man besøger Moseholm.
                        </p>
                    </div>
                </div>
                <div class="row g-2" id="faqContainer">
                </div>
                <div class="row mt-5">

                    <div class=" col-12 col-lg-6">
                        <h3 class="text-secondary">Find os her:</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2270.1235168650023!2d11.635662415913858!3d55.320929180440025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652983b9e69bdab%3A0x6ff71ef7900062db!2sGunderslevvej%202%2C%204250%20Fuglebjerg!5e0!3m2!1sda!2sdk!4v1641759947354!5m2!1sda!2sdk"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class=" col-12 col-lg-6">
                        <h3 class="text-secondary">Kontakt:</h3>
                        <p>
                            <span class="iconLabel">
                                <i class="fas fa-map-pin"></i>
                                <a class="hyperlink" href="https://goo.gl/maps/B1nh3TsDH9H6SzQf7" target="_blank"
                                    rel="noreferrer">Gunderslevvej 2, 4250 Fuglebjerg</a>
                            </span>
                        </p>
                        <p> <span class="iconLabel">
                                <i class="fas fa-phone"></i>
                                55 28 12 12
                            </span></p>
                        <p>
                            <span class="iconLabel">
                                <i class="fas fa-envelope"></i>
                                hej@moseholm.dk
                            </span>
                        </p>
                        <p>
                            <span class="iconLabel">
                                <i class="fas fa-barcode"></i>
                                CVR: 22103816
                            </span>
                        </p>
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
    import {
        createElement
    } from "/moseholm/utils/createElement.js";
    const faqContainer = document.getElementById("faqContainer");
    const faqItems = [{
            header: "Påklædning",
            text: "Tag tøj på, som kan tåle at blive <strong>beskidt</strong> og som passer til vejret",
            icon: "fa-tshirt"
        }, {
            header: "Hunde",
            text: "Hunde er velkomne, men de skal kunne tolere de andre dyr, vi har på gården.",
            icon: "fa-dog"
        },
        {
            header: "Rygning",
            text: "Rygning er <strong>forbudt</strong> på Moseholm - både indendørs og udendørs",
            icon: "fa-smoking-ban"
        },
        {
            header: "Åbningstider",
            text: "Vores <strong>åbningstider</strong> er hverdage 10-20, lørdag 9-18 og søndag 9-15.",
            icon: "fa-clock"
        },
        {
            header: "Betaling",
            text: "Vi tager imod <strong>kontanter</strong>, <strong>kreditkort</strong>  og <strong>mobile pay</strong>",
            icon: "fa-credit-card"
        },
        {
            header: "Parkering",
            text: "Vi løber aldrig tør for parkeringsplads",
            icon: "fa-parking"
        },
    ]
    if (faqContainer) {

        faqItems?.forEach(faqItem => {
            const faqItemContainer = createElement("div", ["col-6", "col-lg-4"], null);
            faqContainer.appendChild(faqItemContainer);

            const faqItemElement = createElement("div", ["faqItem"], null);
            faqItemContainer.appendChild(faqItemElement);

            const faqItemIcon = createElement("i", ["fas", faqItem.icon], null);
            faqItemElement.appendChild(faqItemIcon);

            const faqItemHeader = createElement("h4", null, null);
            faqItemHeader.textContent = faqItem.header;
            faqItemElement.appendChild(faqItemHeader);

            const faqItemText = createElement("p", null, null);
            faqItemText.innerHTML = faqItem.text;
            faqItemElement.appendChild(faqItemText);
        })
    }
    </script>
</body>

</html>
<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - praktisk info</title>

    <meta name="robots" content="index,follow" />
    <meta name="author" content="Udgiver" />
    <meta name="copyright" content="Information om copyright" />
    <?php include  $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/dependencies.html" ?>

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
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/navbar.html" ?>
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
            </div>
        </div>


        <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/footer.html" ?>
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
            header: "Tid",
            text: "Efter vores erfaring, bruger man typisk <strong>1-4 timer</strong> på et besøg på Moseholm",
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
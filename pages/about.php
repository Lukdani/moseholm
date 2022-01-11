<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - Om Moseholm</title>
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
                                    Moseholm har siden sin stiftelse i 1968 været drevet på en overbevisning om, at vi
                                    kan
                                    dyrke de gamle traditioner på en bæredygtig
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
                                <br>
                                <h4>Vores mission</h4>

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
                                    Gårdbutikken har altid fungeret som
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

                <div id="animals" class="row mb-4 navbar-spacer">
                    <div class="col-12">
                        <h3 class="about-header about-header--alt"><i class="fas fa-paw"></i> Vores dyr</h3>
                        <div class="about-content about-content--animals">
                            <div class="about-content-text">
                                <p class="mb-4 text-center">
                                    Vi har flere dyr på gården, end vi kan vise her på siden.
                                    <br>
                                    Men nedenfor for kan du se et udsnit af vores dyr, som altid elsker at få besøg.
                                    <br>
                                    De mindste kan endda give dyrene en virtuel godbid.
                                    <br>
                                    <br>
                                    Både Alf, Jytte, Helge og Simone er på gården og kan besøges.
                                </p>
                            </div>
                            <div class="row g-3 mt-2" id="animalsContainer">

                            </div>

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
    <script type="module">
    import {
        createElement
    } from "/moseholm/utils/createElement.js";
    import {
        WindowResizeHandler
    } from "/moseholm/utils/WindowResizeHandler.js"

    const animalsRoot = document.getElementById("animalsContainer");

    const animals = [{
            name: "Alf",
            imageName: "alf",
            soundName: "alf",
            description: "Alf er vores søde lille lam, som blev født den 12. august 2021. <br> Alf er meget kontaktsøgende, men når han er søvnig, vil han kun have sin mor.",
        },
        {
            name: "Jytte",
            imageName: "pig",
            soundName: "jytte",
            description: "Jytte elsker børn, og hun elsker især at blive fodret af børn. Hendes livret er økologiske gulerødder eller enhver anden form for mad.",
        },
        {
            name: "Helge",
            imageName: "hen",
            soundName: "helge",
            description: "Helge leder altid efter nye venner. <br> Han kan hoppe højt og har altid en god historie.",
        },
        {
            name: "Simone",
            imageName: "cow",
            soundName: "cow",
            description: "Simone er meget nysgerrig og byder altid gæsterne velkommen. Hun har boet på Moseholm i 6 år.",
        }
    ]

    const renderAnimals = (isMobile) => {
        animalsRoot.innerHTML = "";
        animals.forEach(animalItem => {
            const animalContainer = createElement("div", ["col-12", "col-lg-6"], null);

            animalsRoot.appendChild(animalContainer);
            const animalElement = createElement("div", ["animal-item"], null);

            animalElement.style["background-image"] =
                `url(/moseholm/images/animals/${animalItem.imageName}.png)`;

            animalContainer.appendChild(animalElement);
            animalElement.style["height"] = `${animalElement.offsetWidth / 900 * 600}px`;

            const animalName = createElement("h4", ["animal-item-name"], null);
            animalName.textContent = animalItem.name;
            animalElement.appendChild(animalName);

            const animalButton = createElement("button", ["animal-item-button", "btn", "btn-primary"],
                null);
            animalButton.setAttribute("data-animal", animalItem.name);
            animalButton.title = `Giv en virtuel godbid til ${animalItem.name}`;
            const animalButtonIcon = createElement("i", ["fas", "fa-bone"], null);
            animalButton.appendChild(animalButtonIcon);
            animalButton.addEventListener("click", () => handleFeedButton(animalItem.soundName));
            animalElement.appendChild(animalButton);

            const animalDescription = createElement("p", ["animal-item-description"], null);
            animalDescription.innerHTML = animalItem.description;
            animalElement.appendChild(animalDescription);
            if (isMobile) {
                animalElement.style["margin-bottom"] = `${animalDescription.offsetHeight}px`;
            }
        })
    }

    const handleFeedButton = (soundName) => {
        new Audio(`/moseholm/sounds/${soundName.toLowerCase()}.m4a`).play();
    }
    const windowResizeHandler = new WindowResizeHandler(renderAnimals, true);
    </script>
</body>

</html>
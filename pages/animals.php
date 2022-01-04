<!--<?php
/*require "settings/init.php";

$blogs = $db->sql("SELECT * FROM blogs");

foreach ($blogs as $blog){
    echo $blog->blogName . "<br>";
}
*/
?>-->

<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - økologisk gårdbutik</title>

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
                <div class="row">
                    <div class="col-12">
                        <h2 class="section-header pb-0">
                            Mød vores søde og dejlige dyr.
                        </h2>
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
                </div>
                <div class="row g-3" id="animalsContainer">

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
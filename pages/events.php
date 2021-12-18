<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Moseholm - Økologisk gårdbutik</title>

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
        <div class="row section" >
        <div class="col-12">
        <h3 class="section-header">
            Giv familien en rigtig landoplevelse.
            <br>
            Bag et brød af mel, I selv har malet.
            <br>
            Rør smør af mælk, I selv har malket.
        </h3>
        </div>
    
            <div id="orderByContainer" class="col-12 col-lg-2">

            </div>

            <div class="col-12 col-lg-10">
                <div id="eventsContainer" class="row">                    
                </div>
                
                <div class="spinner hidden" id="eventSpinner">
                    <i class="fas fa-tractor fa-spin "></i>
                </div>
            </div>
        </div>
    </div>
</div>
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/footer.html" ?>
    </div>
    
   <script type="module">
       import { EventInitializer  } from "/moseholm/js/eventInitializer.js";
       const eventInitializer = new EventInitializer("3", true);
   </script>

</body>

</html>
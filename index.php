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

    <?php include  $_SERVER['DOCUMENT_ROOT'] ."/moseholm/includes/dependencies.html" ?>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>
    <div id="pageContainer">
        <div id="pageContent">


    <?php include "./includes/navbar.html" ?>
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
            <button class="btn btn-primary">Find vej</button>
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
                    <p>Kolonialt</p>                   
                    </div>
                    </a>
                </div>
                <div class="col-12 col-lg-4 col-space category-overview-container">
                      <a href="/moseholm/pages/products.php?categories=dairy">
                <div class="category-overview-item">
                <i class="fas fa-egg"></i>
                    <p>Mejeri</p>
</div>
</a>
                </div>
                <div class="col-12 col-lg-4 col-space category-overview-container">
                      <a href="/moseholm/pages/products.php?categories=bread">
                <div class="category-overview-item">
                <i class="fas fa-bread-slice"></i>
                    <p>Brød</p>
</div>
</a>
                </div>
                <div class="col-12 col-lg-4 col-space category-overview-container">
                      <a href="/moseholm/pages/products.php?categories=fruit">    
                <div class="category-overview-item">
                    <i class="fas fa-apple-alt"></i>
                    <p>Frugt</p>
</div>
</a>
                </div>
                <div class="col-12 col-lg-4 col-space category-overview-container">
                      <a href="/moseholm/pages/products.php?categories=vegetables">    
                <div class="category-overview-item">
                    <i class="fas fa-carrot"></i>
                    <p>Grøntsager</p>
</div>
</a>
                </div>
                <div class="col-12 col-lg-4 col-space category-overview-container">
                      <a href="/moseholm/pages/products.php?categories=meat">    
                <div class="category-overview-item">
                    <i class="fas fa-drumstick-bite"></i>
                    <p>Kød</p>
</div>
</a>
                </div>
          

            </div>
        </div>
        </div>
        <div class="section features overlay overlay--light">
     
     
        <div class="container-lg">      
        <div class="row overlay-text">
        <h1 class="section-header overlay-text">Besøs os fordi...</h1>
            <div class="col-12 offset-lg-2 col-lg-8 features-points-container overlay-text">
        <table>
                    <tbody>
                        <tr>
                            <td><i class="fas fa-check-square"></td>
                            <td>Vores gårdbutik er 100% økologisk</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-check-square"></td>
                            <td>Slap af i vores atmosfæriske café</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-check-square"></td>
                            <td>Få mulighed for at besøge vores søde og nysgerrige dyr</td>
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
                    <button class="btn-secondary btn">Se alle events</button>
                    </div>
                </div>
        
    </div>
    </div>
    </div>  
    <?php include "./includes/footer.html" ?>
    
</div>

<script type="module">
       import { EventInitializer  } from "/moseholm/js/eventInitializer.js";
       const eventInitializer = new EventInitializer("4", false, "ASC");
   </script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
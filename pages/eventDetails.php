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
                <div id="eventDetailsContainer" class="row">                    
                </div>
                
                <div class="spinner hidden" id="eventSpinner">
                    <i class="fas fa-tractor fa-spin "></i>
                </div>
            </div>
            <div class="col-12">
<div class="row">
    <div class="col-12">
        
    </div>
</div>
<div class="row">
    <div class="col-12 col-lg-4">
    <form id="eventDetails-commentForm">
            <div class="form-group">
    <label for="commentAuthor">Dit navn</label>
    <input name="ecomAuthor" type="text" required class="form-control" id="eventDetails-commentForm-author" placeholder="Indtast dit navn">
  </div>
  <div class="form-group">
    <label for="commentComment">Din kommmentar</label>
    <textarea type="text" name="ecomComment" required class="form-control" id="eventDetails-commentForm-comment" placeholder="Indtast din kommentar"></textarea>
  </div>
  <button class="btn btn-primary commentSubmitButton">Send kommentar</button>
            </form>
    </div>

    <div class="col-12 col-lg-8">
        
                <div id="eventCommentsContainer" class="row">                    
                </div>     
                </div>            
            </div>
            </div>
    </div>
</div>
</div>
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/moseholm/includes/footer.html" ?>
  
    </div>
   <script type="module">
       import { EventDetailsInitializer  } from "/moseholm/js/eventDetailsInitializer.js";
       const eventInitializer = new EventDetailsInitializer("3", true);
   </script>

</body>

</html>
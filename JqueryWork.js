<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

</head>
<body>
<div id="slideMe">
    This content will appear and disappear when the div is slid in and out.
</div>
<!-- One button for each slide command -->
<input type="button" id="btnSlideUp" value="Slide Up">
<input type="button" id="btnSlideDown" value="Slide Down">
<input type="button" id="btnSlideToggle" value="Slide Toggle">
<hr>
<div id="fadeMe">
    This content will appear and disappear when the div is faded in and out.
</div>
<!-- One button for each fading command -->
<input type="button" id="btnFadeOut" value="Fade Out">
<input type="button" id="btnFadeIn" value="Fade In">


 <script>
 $('#btnSlideUp').click(function() {
    $('#slideMe').slideUp('slow');
});
$('#btnSlideDown').click(function() {
    $('#slideMe').slideDown();
});
$('#btnSlideToggle').click(function() {
    $('#slideMe').slideToggle('fast');
});


// fade button query
$('#btnFadeIn').click(function() {
    $('#fadeMe').fadeIn('slow');
});
$('#btnFadeOut').click(function() {
    $('#fadeMe').fadeOut();
});
 </script>   
 </body>
</html>

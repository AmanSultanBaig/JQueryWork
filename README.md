# Copy CDN of JQuery & add to your file

``` ruby 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

## sideUp / sideDown Effects
### Example: Html
``` ruby 
<div id="slideMe">
    This content will appear and disappear when the div is slid in and out.
</div>

<input type="button" id="btnSlideUp" value="Slide Up">
<input type="button" id="btnSlideDown" value="Slide Down">
<input type="button" id="btnSlideToggle" value="Slide Toggle">

```

### Example: JQuery of sideUp / sideDown Effects

``` ruby 
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
</script>
```

## fadeIn / fadeOut effect
Write Html and try to give fadeIn / fadeOut effect to respects element
### Example: Html 

``` ruby 
<div id="fadeMe">
    This content will appear and disappear when the div is faded in and out.
</div>

<input type="button" id="btnFadeOut" value="Fade Out">
<input type="button" id="btnFadeIn" value="Fade In">

```
### Example: JQuery of fadeIn / fadeOut Effects

``` ruby 
<script>

$('#btnFadeIn').click(function() {
    $('#fadeMe').fadeIn('slow');
});
$('#btnFadeOut').click(function() {
    $('#fadeMe').fadeOut();
});

</script>
```

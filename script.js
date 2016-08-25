
$(document).ready(function(){
  
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 690, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  });
})


BRUSHED.listenerMenu = function(){
And add this little method at the bottom:

    // Fix outside links.
    $('.linkfix_LogIn a').on('click',function() {           
        window.location.href = "Swaroop Aradhya Resume.pdf";  // Change This
});


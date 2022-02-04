//  js and jquery just exec when full page load.
$(function() { 

    // for loading animate
     $("#loading").fadeTo(2000,0.8).fadeTo(1000,0).fadeOut(500,0);

    // slow scroling
    $("a").on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html , body').animate({
                scrollTop: $(hash).offset().top -30
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(".sections_").mouseover(function() {
        $("#sections").css({"border": "palegreen 6px solid"});
    })

    $(".sections_").mouseout(function() {
        $("#sections").css({"border": "rosybrown 5px solid"});
    })

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

});
  
// slide show


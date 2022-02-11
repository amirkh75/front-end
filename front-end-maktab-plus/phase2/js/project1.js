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


});
  
// slide show


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
    // $("li").slideUp("5000");

    // $(".droplink").click(function (e) { 
    //     e.preventDefault();
    //     $("li").slideDown("slow");
        
    // });

    

    // $("#about").click(function (e) { 
    //     e.preventDefault();
    //     $("#navbar").slideToggle("slow");
        
    // });


    // $("#section1").click(
    //     function() {
    //         $("#sections").css({"border": "palegreen 3px solid"});
    //     }
    // );

    // $("#section2").click(
    //     function() {
    //         alert("hi babe!");
    //     }
    // );

    // var a=5;

    // document.getElementsByClassName("span-navbar")[0].style.color = "red";


    // if (a==5)
    //     console.log("equal")





    // console.log(a);

    // var a = [0,1,2,3]
    // console.log(a)
    // function change_textp() {
    //     document.getElementById("about").innerHTML = "hi!";
    // }

//     var flagp = 0;

//     function flag_func() {

//         if (flagp == 0){
//             document.getElementById("section1").style.visibility = "hidden";
//             flagp = 1;
//         }
//         else {
//             document.getElementById("section1").style.visibility = "visible";
//             flagp = 0;
//         }
//     }

// });

    // jquery

    // $("li").hide();
    // $("div").hide();

    // this is equal to next code
    // $( document ).ready(function() {
    //     console.log("ready!");
    // });

    // $(function() {
    //     console.log("ready");
    // });

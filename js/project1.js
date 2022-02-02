
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

var flagp = 0;

function flag_func() {

    if (flagp == 0){
        document.getElementById("section1").style.visibility = "hidden";
        flagp = 1;
    }
    else {
        document.getElementById("section1").style.visibility = "visible";
        flagp = 0;
    }
}

window.onscroll = function() {scrollFunction()};

document.getElementById("section-pic").style.display = "none";
document.getElementById("section-pic2").style.display = "none";

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("section-pic").style.display = "block";
  } 
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    document.getElementById("section-pic2").style.display = "block";
  } else {
    // document.getElementById("section-pic").style.display = "none";
  }
}

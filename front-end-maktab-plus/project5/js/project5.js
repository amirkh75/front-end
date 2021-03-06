document.addEventListener("DOMContentLoaded", function(){

  // hide navbar in scrolling.
  el_autohide = document.querySelector('.autohide');
    
  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';
  
  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
          if(scroll_top < 300) {
            el_autohide.classList.remove('scrolled-down');
            el_autohide.classList.add('scrolled-up');
          }
          else if (scroll_top < last_scroll_top) {
            el_autohide.classList.remove('scrolled-down');
            el_autohide.classList.add('scrolled-up');
          } 
          else {
            el_autohide.classList.remove('scrolled-up');
            el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
      
  } // end of hide navbar in scrolling.
  
  el_body = document.querySelector('body');

  if(el_body){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
          if(scroll_top < 550) {
            document.body.style.backgroundImage = "url('https://srilankafoundation.org/wp-content/uploads/2016/07/Beach.jpg')"; 
          }
          else {
            document.body.style.backgroundImage = "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')"; 
          }
    }); 
      
  } // end of hide navbar in scrolling.


  
}); 
  // DOMContentLoaded  end

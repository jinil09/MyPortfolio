$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');


        if($(window).scrollTop() > 30){
            $('.header').css({'background':'black', 'box-shadow':'0 .2rem .5rem rgba(0, 0, 0, .4)'});
        }
        else{
            $('.header').css({'background':'none', 'box-shadow':'none'}); 
        }
    });

});


document.addEventListener('DOMContentLoaded', function () {
    let fadeElements = document.querySelectorAll('.fade');
  
    function checkFadeElements() {
      for (let i = 0; i < fadeElements.length; i++) {
        let element = fadeElements[i];
        let positionFromTop = element.getBoundingClientRect().top;
  
        if (positionFromTop - window.innerHeight <= 0) {
          element.classList.add('show');
        }
      }
    }
  
    window.addEventListener('scroll', checkFadeElements);
    checkFadeElements();
  });


  // -------------------------------------------------------------------------------

  const cursorElement = document.getElementById('cursor');
        const cursorAnimationDuration = 4000; // Adjust the duration to match your typing animation

        setTimeout(() => {
            cursorElement.style.display = 'none';
        }, cursorAnimationDuration);
 

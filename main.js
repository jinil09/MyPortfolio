$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');


        if($(window).scrollTop() > 33){
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

  
const c1= document.getElementById('mainReadmoreContainer');
const rm= document.getElementById('Readmoree')
const rl= document.getElementById('Readless')
  
function readmore(){
    c1.setAttribute("style","display:block")
    rl.setAttribute("style","display:block")
    rm.setAttribute("style","display:none")
 }

function readless(){
  c1.setAttribute("style","display:none")
  rl.setAttribute("style","display:none")
  rm.setAttribute("style","display:block")
 }

const c2= document.getElementById('mainReadmoreContainer1');
const rm1= document.getElementById('Readmoree1')
const rl1= document.getElementById('Readless1')
  
function readmore1(){
    c2.setAttribute("style","display:block")
    rl1.setAttribute("style","display:block")
    rm1.setAttribute("style","display:none")
 }

function readless1(){
  c2.setAttribute("style","display:none")
  rl1.setAttribute("style","display:none")
  rm1.setAttribute("style","display:block")
 }

 const c3= document.getElementById('mainReadmoreContainer2');
 const rm2= document.getElementById('Readmoree2')
 const rl2= document.getElementById('Readless2')
   
 function readmore2(){
     c3.setAttribute("style","display:block")
     rl2.setAttribute("style","display:block")
     rm2.setAttribute("style","display:none")
  }
 
 function readless2(){
   c3.setAttribute("style","display:none")
   rl2.setAttribute("style","display:none")
   rm2.setAttribute("style","display:block")
  }

const c4= document.getElementById('mainReadmoreContainer3');
const rm3= document.getElementById('Readmoree3')
const rl3= document.getElementById('Readless3')
   
 function readmore3(){
     c4.setAttribute("style","display:block")
     rl3.setAttribute("style","display:block")
     rm3.setAttribute("style","display:none")
  }
 
 function readless3(){
   c4.setAttribute("style","display:none")
   rl3.setAttribute("style","display:none")
   rm3.setAttribute("style","display:block")
  }
 // ---------------------------------------------------------------------------------
// Get the current date and time.
var now = new Date();

// Create a new localStorage object to store the visit count.
var localStorage = window.localStorage;

// Get the current visit count from localStorage.
var visitCount = localStorage.getItem('visitCount');

// If the visit count does not exist, set it to 1.
if (visitCount === null) {
  visitCount = 1;
}

// Increment the visit count.
visitCount++;

// Set the visit count in localStorage.
localStorage.setItem('visitCount', visitCount);

// Display the visit count in the footer.
document.getElementById('footer-visit-count').innerHTML = visitCount;
// ------------------------------------------------------------------------------------------

// Get the total visitors count from localStorage.
var visitCount = localStorage.getItem('visitCount');

// If the visit count does not exist, set it to 1.
if (visitCount === null) {
  visitCount = 1;
}

// Set the total visitors count in the footer.
document.getElementById('footer-visit-count').innerHTML = visitCount;
// Generate a random font color.
var fontColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// Set the total visitors count font color to the random font color.
document.getElementById('footer-visit-count').style.color = fontColor;

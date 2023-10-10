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

// Function to get the visitor count from local storage
function getVisitorCountFromLocalStorage() {
  return localStorage.getItem('visitorCount');
}

// Function to update the visitor count in local storage
function updateVisitorCountInLocalStorage(count) {
  localStorage.setItem('visitorCount', count);
}

// Function to display the visitor count on the page
function displayVisitorCount(count) {
  const visitorCountElement = document.getElementById('visitor-count');
  visitorCountElement.textContent = count;
}

// Fetch the visitor count from local storage
let visitorCount = getVisitorCountFromLocalStorage();

// If no count is found in local storage, set it to 0
if (!visitorCount) {
  visitorCount = 0;
}

// Display the initial visitor count
displayVisitorCount(visitorCount);




// Fetch the current visitor count from the GitHub repository's Issues
fetch('https://api.github.com/repos/jinil09/MyPortfolio/issues?state=all')
  .then(response => response.json())
  .then(data => {
    // Calculate the visitor count (total number of issues)
    const newVisitorCount = data.length;

    // Update local storage with the new count
    updateVisitorCountInLocalStorage(newVisitorCount);

    // Update the displayed visitor count
    displayVisitorCount(newVisitorCount);
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  });


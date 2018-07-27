var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}

function fitquote() {
  window.open("fitnessQuote/fq.html" ,"_self")
}

function artquote() {
  window.open("artQuote/a.html" ,"_self")
}

function frenquote() {
  window.open("frenQuote/fren.html" ,"_self")
}

function lifequote() {
  window.open("lifeQuote/life.html" ,"_self")
}

function lovequote() {
  window.open("loveQuote/love.html" ,"_self")
}

function motquote() {
  window.open("motQuote/mot.html" ,"_self")
}

function relquote() {
  window.open("relQuote/rel.html" ,"_self")
}

function petquote() {
  window.open("petQuote/pet.html" ,"_self")
}

function famquote() {
  window.open("famQuote/fam.html" ,"_self")
}

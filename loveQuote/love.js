var quotes = [' “We waste time looking for the perfect lover instead of creating the perfect love.” – Tom Robbins',
              ' “Some women choose to follow men, and some women choose to follow their dreams. If you’re wondering which way to go, remember that your career will never wake up and tell you that it doesn’t love you anymore.” – Lady Gaga',
              ' “Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.” – Joan Crawford',
              ' “The difference between sex and love is that sex relieves tension and love causes it.” – Woody Allen',
              ' “You deserve love, and you’ll get it.” – Amy Poehler',
              ' “Give in to love, or live in fear.” – Jonathan Larson',
              ' “If you love two people at the same time, choose the second. Because if you really loved the first one, you wouldn’t have fallen for the second.” – Johnny Depp',
              ' “I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.” – Pablo Neruda ',
              ' “Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.” – Lao Tzu',
              ' “Love is that condition in which the happiness of another person is essential to your own.” – Robert A. Heinlein',
              ' “If music be the food of love, play on.” – William Shakespeare',
              ' “Women are meant to be loved, not to be understood.” – Oscar Wilde',
              ' “Love is always patient and kind. It is never jealous. Love is never boastful or conceited. It is never rude or selfish. It does not take offense and is not resentful. Love takes no pleasure in other people’s sins, but delights in the truth. It is always ready to excuse, to trust, to hope, and to endure whatever comes. —The Bible',
              ' “Love is blind. And it will take over your mind. What you think is love, is truly not. You need to elevate your mind.” – Eve',
              ' “It is better to be hated for what you are than to be loved for what you are not.” – André Gide',
              ' “What is love? I have met in the streets a very poor young man who was in love. His hat was old, his coat worn, the water passed through his shoes and the stars through his soul.” – Victor Hugo',
              ' “Men are a luxury. Not a necessity.” – Cher'
             ];


var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];


function myFunction() {
var number = Math.floor(Math.random()*(quotes.length));
   document.getElementById("demo").innerHTML = quotes[number];

}

   function colorFunction() {
var num = Math.floor(Math.random()*(colors.length));
   document.getElementById("aajacolor").style.backgroundColor = colors[num];

}

function liked(){
  document.getElementById("laal").style.color = "red";
  setTimeout(unliked, 200);
}


function unliked(){
  if (confirm("Thank you for liking!")) {
    document.getElementById("laal").style.color = "black";
   }
}

function hola(){
  alert("You have to login first!");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function qotday() {
  window.open("../qotd.html" , "_self");
}

function login() {
  window.open("../my-login-master/index.html" , "_self");
}

function contact() {
  window.open("../contact.html" , "_self");
}

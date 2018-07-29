var quotes = [' “My best friend is the one who brings out the best in me.” —Henry Ford',
              ' “Love is friendship that has caught fire. It is quiet understanding, mutual confidence, sharing and forgiving. It is loyalty through good and bad times. It settles for less than perfection and makes allowances for human weaknesses.” —Ann Landers',
              ' “The greatest healing therapy is friendship and love” —Hubert H. Humphrey',
              ' “It is one of the blessings of old friends that you can afford to be stupid with them” —Ralph Waldo Emerson',
              ' “Friends show their love in times of trouble, not in happiness.” —Euripides',
              ' “There is nothing on this earth more to be prized than true friendship” —Thomas Aqunias',
              ' “The difference between the impossible and the possible lies in a person’s determination.” —Tommy Lasorda',
              ' “Walking with a friend in the dark is better than waling alone in the ligth” —Hellen Keller',
              ' “One of the most beautiful qualities of true friendship is to understand and to be understood” —Lucius Annaeus Seneca',
              ' “Share your smile with the world. It is a symbol of friendship and peace” —Christie Brinkley',
              ' “The greatest gift of life is friendship, and I have recieved it.” —Hubert H. Humphrey',
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

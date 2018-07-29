var quotes = [' “I think being in love with life is a key to eternal youth.” —Doug Hutchison',
              ' “You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way.” —Walter Hagen',
              ' “A man who dares to waste one hour of time has not discovered the value of life.” —Charles Darwin',
              ' “If life were predictable it would cease to be life, and be without flavor.” —Eleanor Roosevelt',
              ' “All life is an experiment. The more experiments you make the better.” —Ralph Waldo Emerson',
              ' “All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low.” —John Wooden',
              ' “Find ecstasy in life; the mere sense of living is joy enough.” —Emily Dickinson',
              ' “My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.” —Maya Angelou',
              ' “However difficult life may seem, there is always something you can do and succeed at.” —Stephen Hawking',
              ' “Life is like riding a bicycle. To keep your balance, you must keep moving.” —Albert Einstein',
              ' “The more you praise and celebrate your life, the more there is in life to celebrate.” —Oprah Winfrey',
              ' “The most important thing is to enjoy your life—to be happy—it’s all that matters. —Audrey Hepburn',
              ' “I enjoy life when things are happening. I don’t care if it’s good things or bad things. That means you’re alive.” —Joan Rivers',
              ' “Life is short, and it is up to you to make it sweet.” —Sarah Louise Delany',
              ' “Life doesn’t require that we be the best, only that we try our best.” —H. Jackson Brown Jr.',
              ' “I always like to look on the optimistic side of life, but I am realistic enough to know that life is a complex matter.” —Walt Disney',
              ' “The truth is you don’t know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.” —Eminem',
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

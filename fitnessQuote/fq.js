var quotes = [' “Today I will do what others won’t, so tomorrow I can accomplish what others can’t.” —Jerry Rice',
              ' “Do something today that your future self will thank you for.” —Unknown',
              ' “We are what we repeatedly do. Excellence then is not an act but a habit.” —Aristotle',
              ' “No matter how slow you go, you are still lapping everybody on the couch.” —Unknown',
              ' “Sweat is fat crying.” —Unknown',
              ' “You miss 100% of the shots you don’t take.” —Wayne Gretzky',
              ' “The difference between the impossible and the possible lies in a person’s determination.” —Tommy Lasorda'
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


 var quotes = ['\"Don\'t cry because it\'s over, smile because it happened." -- Dr. Seuss',
               '\"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best" --Marilyn Monroe',
               '\"Be yourself; everyone else is already taken."-- Oscar Wilde',
               '\"Two things are infinite:the universe and human stupidity;and I\'m not sure about the universe" --Albert Einstein',
               '\"So many books, so little time." --Frank Zappa',
               '\"You are my stary night!\
                I masked moon,to have a glimpse of you." --Ak'
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
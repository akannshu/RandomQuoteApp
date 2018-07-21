var quotes = [' “Most relationship fail not because of the absence of love. Love is always present. It’s just that one loves too much and the other loves too little” ',
              ' “A great relationship doesn’t happen because of the love you had in the beginning, but how well you continue building love until the end.”',
              ' “A relationship is like a house. When a lightbulb burns out you do not go and buy a new house, you fix the light bulb”',
              ' “A successful relationship requires falling in love multiple times, but always with the same person.”',
              ' “If you truly love someone, being faithful is easy.”',
              ' “If the feelings are mutual, the effort will be equal.”',
              ' “Best relationship: talk like bestfriends, play like children, argue like husband and wife, protect each other like brother and sister.”',
              ' “The best relationship is when you can act like lovers and best friends at the same time.”',
              ' “Someone who truly loves you, sees what a mess you can be, how moody you can get, and how hard you can be to handle, but still wants you.”',
              ' “Relationships include: fights, jealousy, arguments, faith, tears, disagreements, but a real relationship fights through all that with love.”',
              ' “Assumptions are the termites of relationships” – Henry Winkler',
              ' “A person that truly loves you will never let you go, no matter how hard the situation is.”',
              ' “A great relationship is about two things. First, appreciating the similarities, and second, respecting the differences.”',
              ' “All relationships have one law. Never make the one you love feel alone, especially when you’re there.”',
              ' “If someone truly loves you, they won’t make you feel like you need to constantly fight for their attention.”',
              ' “Never leave a true relationship for a few faults. Nobody is perfect, nobody is correct in the end affection is always greater than perfection.”',
              ' “Relationships are worth fighting for, but you can’t be the only one fighting.”'
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

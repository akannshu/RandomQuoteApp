var quotes = [' “The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
              ' “The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill',
              ' “Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
              ' “You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
              ' “It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Vince Lombardi',
              ' “If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
              ' “People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen',
              ' “Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
              ' “Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai',
              ' “We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou',
              ' “Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe',
              ' “For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.” – Jack Canfield',
              ' “Things Work Out Best For Those Who Make The Best Of How Things Work Out.” – John Wooden',
              ' “I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time.” – Michael Phelps',
              ' “One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals.” – Michelle Obama',
              ' “Today’s Accomplishments Were Yesterday’s Impossibilities.” – Robert H. Schuller',
              ' “The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.” – Steve Jobs'
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

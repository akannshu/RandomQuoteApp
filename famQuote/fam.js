var quotes = [' “Tennis just a game, family is forever.” – Serena Williams',
              ' “Work is work, but family is for life. That’s what really matters to me.” – Akshay Kumar',
              ' “My family is my life, and everything else comes second as far as what’s important to me.” – Michael Imperioli',
              ' “Seeing the family is a very important part of my weekend.” – Susannah York',
              ' “Family is a unique gift that needs to be appreciated and treasured, even when they’re driving you crazy. As much as they make you mad, interrupt you, annoy you, curse at you, try to control you, these are the people who know you the best and who love you.” – Jenna Morasca',
              ' “I think family is key, and if you have love for family, then you have love for others – and you have unity as a people.” – Marlon Wayans',
              ' “The most important thing in the world is family and love.” – John Wooden',
              ' “For me, family always comes first; I would do anything to protect them.” – Mark Wahlberg',
              ' “Family and God – that is what’s important. Money, cars, those are things that come and go.” – Fabrice Muamba',
              ' “What is important is family, friends, giving back to your community and finding meaning in life.” – Adrian Grenier',
              ' “One’s family is the most important thing in life. I look at it this way: One of these days I’ll be over in a hospital somewhere with four walls around me. And the only people who’ll be with me will be my family.” – Robert Byrd',
              ' “My family is everything. I am what I am thanks to my mother, my father, my brother, my sister… because they have given me everything. The education I have is thanks to them.” – Ronaldinho',
              ' “I am blessed to have so many great things in my life – family, friends and God. All will be in my thoughts daily.” – Lil’ Kim',
              ' “Family is the most important thing in the world.” – Princess Diana',
              ' “It takes a lot of work to put together a marriage, to put together a family and a home.” – Elizabeth Edwards',
              ' “I have a great family, I live an amazing life.” – John Oates',
              ' “The family is the first essential cell of human society.” – Pope John XXIII',
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

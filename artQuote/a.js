var quotes = [' “Every artist was first an amateur” —Ralph Waldo Emerson',
              ' “Creativity takes courage” —Henri Matisse',
              ' “Every child is an artist. The problem is how to remain an artist once we grow up.” —Pablo Picasso',
              ' “You don’t take a photograph, you make it” —Ansel Adams',
              ' “Art enables us to find ourselves and lose ourselves at the same time.” —Thomas Merton',
              ' “We don’t make mistakes, just happy little accidents” —Bob Ross',
              ' “A picture is a poem without words.” —Horase',
              ' "The principles of true art is not to portray, but to evoke." —Jerzy Kosinski',
              ' "Painting is easy when you don’t know how, but very difficult when you do." —Edgar Degas',
              ' "As my artist’s statement explains, my work is utterly incomprehensible and is therefore full of deep significance" —Calvin'
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

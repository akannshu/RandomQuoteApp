var quotes = [' “I would like to see anyone, prophet, king or God, convince a thousand cats to do the same thing at the same time.”― Neil Gaiman',
              ' “Our perfect companions never have fewer than four feet.” ― Colette',
              ' “Until one has loved an animal, a part of ones soul remains unawakened.” ― Anatole France',
              ' “A dog reflects the family life. Whoever saw a frisky dog in a gloomy family, or a sad dog in a happy one? Snarling people have snarling dogs, dangerous people have dangerous ones.” ― Arthur Conan Doyle',
              ' “Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day. It is amazing how much love and laughter they bring into our lives and even how much closer we become with each other because of them.” ― John Grogan',
              ' “Dogs do speak, but only to those who know how to listen.” ― Orhan Pamuk',
              ' “I care not for a mans religion whose dog and cat are not the better for it.” ― Abraham Lincoln',
              ' “Pets are humanizing. They remind us we have an obligation and responsibility to preserve and nurture and care for all life.”',
              ' “Parrots make great pets. They have more personality than goldfish.”',
              ' “Animals are reliable, many full of love, true in their affections, predictable in their actions, grateful and loyal. Difficult standards for people to live up to.”',
              ' “Pets have more love and compassion in them than most humans.”',
              ' “Pets, like their owners, tend to expand a little over the Christmas period.”',
              ' “Most pets display so many humanlike traits and emotions it is easy to forget they are not gifted with the English language and then get snubbed when we talk to them and they do not say anything back.”',
              ' “Sometimes losing a pet is more painful than losing a human because in the case of the pet, you were not pretending to love it.”',
              ' “Your pet is not your friend. It is your hostage.”',
              ' “Animals are such agreeable friends they ask no questions, they pass no criticisms.”',
              ' “Dogs are better than human beings because they know but do not tell.”'
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

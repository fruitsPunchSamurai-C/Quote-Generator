"use strict";
// Tableau de citations 
let quotes = [
{text : "Happiness depends on each person. If you think you're happy, then you must be happy.", author : "Gintoki Sakata"},
{text : "I stand on the battlefield to protect what's important to me.", author :"Kagura"},
{text : "A life without gambling is like sushi without wasabi!",author :"Gintoki Sakata"},
{text : "If you have faith, your dreams will surely come true.",author :"Katsura Kotaro"},
{text : "I don't care if I lose an arm or a leg, as long as I am still breathing I'll keep fighting, that's a street fight for you" ,author :"Hijikata Toshiro"},
{text : "Before you try revolutionizing the country, why don't you try revolutionize yourself first?",author :"Hijikata Toshiro"},
{text : "Having no money is like having a sinus infection. You just ignore it and it goes away.",author :"Gintoki Sakata"},
{text : "I have an organ more important than my heart.",author :"Gintoki Sakata"},
{text : "It’s quite easy for humans to become adults, but to always have a child-like heart that makes everything joyful isn’t such an easy task.",author :"Hattori Zenzō"},
{text : "There’s no short-cut to becoming strong. Even if you try to look strong on the outside, that thin layer will soon fall off.",author : "Shimura Shinpachi"},
{text:"Change is never easy in this world. I can’t even change one friend, let alone a whole country.",author :"Katsura Kotaro"},
{text:"If I were to survive, but couldn’t protect what was important to me, then I might as well be dead.", author :" Tama"},
{text:"The only people who say that money doesn’t matter in this world are the ones with lots of it.", author :"Takasugi Shinsuke"},
{text:"Sometimes, it’s necessary to look back at the past in order to move on to the future.", author :"Okita Sōgo"},
{text:"If you've got enough time to fantasize about a beautiful death, why not live beautifully until the very end?",author : "Gintoki Sakata"}
];


const txt = document.querySelector('#citation');
const auteur = document.querySelector('#auteur');
const btn = document.querySelector('#bouton');


const getRandomquote = () => {
const num = Math.floor(Math.random()*quotes.length);
const item = quotes[num];
console.log(item);
const getQuote = item.text;
const getAuthor = item.author;
txt.textContent = getQuote;
auteur.textContent = getAuthor;
}

btn.addEventListener('click', getRandomquote);



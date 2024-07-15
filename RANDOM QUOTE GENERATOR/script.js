Quotes =["As a cure for worrying, work is better than whisky.","Everything comes to him who hustles while he waits.", "I never did a day's work in my life. It was all fun.","I do not know the American gentleman, god forgive me for putting two such words together.", "We need never be ashamed of our tears.","Minds, like bodies, will often fall into a pimpled, ill-conditioned state from mere excess of comfort.", "Train up a fig tree in the way it should go, and when you are old sit under the shade of it.","Subdue your appetites, my dears, and you've conquered human nature.","Faith, as well intentioned as it may be, must be built on facts, not fiction--faith in fiction is a damnable false hope.", "There is no expedient to which a man will not go to avoid the labor of thinking.","No one is useless in this world who lightens the burdens of another.","Results! Why, man, I have gotten a lot of results. I know several thousand things that won't work.","Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.","Opportunity is missed by most people because it is dressed in overalls and looks like work.","The doctor of the future will give no medicine, but will interest her or his patients in the care of the human frame, in a proper diet, and in the cause and prevention of disease.","We don't know a millionth of one percent about anything.","If we all did the things we are capable of doing, we would literally astound ourselves.","To invent, you need a good imagination and a pile of junk.", "I never did anything worth doing by accident, nor did any of my inventions come by accident", "Hell, there are no rules here-- we're trying to accomplish something."];

authors = ["Thomas Edison","Thomas Edison","Thomas Edison","Charles Dickens","Charles Dickens","Charles Dickens","Charles Dickens","Charles Dickens","Thomas Edison","Thomas Edison","Charles Dickens","Thomas Edison","Charles Dickens","Thomas Edison","Thomas Edison","Thomas Edison","Thomas Edison","Thomas Edison","Thomas Edison","Thomas Edison"];

const quote_diff = document.querySelector(".quote");
const author_name = document.querySelector(".author span");
const button = document.querySelector("button");


quote_diff.innerText = Quotes[0];
author_name.innerText = authors[0];


button.addEventListener("click",()=>{
const randomIndexNumber = Math.floor(Math.random()* Quotes.length);
quote_diff.innerText = Quotes[randomIndexNumber];
author_name.innerText = authors[randomIndexNumber];
})
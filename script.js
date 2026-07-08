// =========================
// A Little Universe 💜
// =========================

// Create Stars
const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    let size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);

}

// Your Birthday Letter

const letter = `

Happiest Birthday Babyyy 💜

Today is one of the most special days for me because today is the day my favourite person came into this world.

I hope this year brings you every happiness you deserve.

I hope you laugh more.

I hope you believe in yourself the way I believe in you.

Whenever life feels heavy...

Come to me.

Sit with me.

Cry if you want.

We'll get through everything together.

You never have to carry everything alone.

I am so proud of you.

More than you probably know.

Thank you for existing.

Thank you for loving me.

Thank you for letting me love you.

Happy Birthday once again...

Mera Sukoon.

Forever yours,

Bhumika 💜

`;

const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(index < letter.length){

        typing.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeWriter,35);

    }

}

// Button

const button = document.getElementById("openBtn");

button.addEventListener("click",()=>{

document.querySelectorAll(".hidden").forEach(section=>{

section.style.display="block";

});

button.innerHTML="Welcome Babyy 💜";

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

setTimeout(typeWriter,500);

});

// Small Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{opacity:0,transform:"translateY(50px)"},

{opacity:1,transform:"translateY(0px)"}

],{

duration:1000,

fill:"forwards"

});

}

});

});

document.querySelectorAll(".container,.ending").forEach(el=>observer.observe(el));
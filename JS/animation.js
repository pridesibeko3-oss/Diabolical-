// ===============================
// DIABOLICAL LUXURY ANIMATIONS
// ===============================

// Fade In Elements

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

reveals.forEach(el=>observer.observe(el));


// Floating Bottle Animation

document.querySelectorAll(".floating-bottle").forEach(bottle=>{

let angle=0;

setInterval(()=>{

angle+=0.02;

bottle.style.transform=

`translateY(${Math.sin(angle)*12}px)
rotate(${Math.sin(angle)*2}deg)`;

},16);

});


// Mouse Glow

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
//==============================
// HERO PARALLAX
//==============================

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

hero.style.transform=

`translate(${x}px,${y}px)`;

});

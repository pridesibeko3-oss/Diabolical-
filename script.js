/*==========================================
DIABOLICAL
Luxury Website
script.js
==========================================*/

// ================================
// GSAP Plugins
// ================================

gsap.registerPlugin(ScrollTrigger);

// ================================
// LENIS SMOOTH SCROLL
// ================================

const lenis = new Lenis({

duration:1.2,

smoothWheel:true,

wheelMultiplier:1,

touchMultiplier:1.4,

infinite:false

});

function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

// ================================
// CURSOR GLOW
// ================================

const glow=document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ================================
// NAVBAR
// ================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// ================================
// HERO ANIMATION
// ================================

gsap.from(".hero-left .eyebrow",{

y:40,

opacity:0,

duration:1,

ease:"power3.out"

});

gsap.from(".hero-left h1",{

y:80,

opacity:0,

duration:1.4,

delay:.2,

ease:"power4.out"

});

gsap.from(".hero-left p",{

y:40,

opacity:0,

duration:1,

delay:.6

});

gsap.from(".hero-buttons",{

y:40,

opacity:0,

duration:1,

delay:.9

});

gsap.from(".hero-bottle",{

scale:.8,

opacity:0,

rotate:8,

duration:2,

ease:"power4.out"

});

// ================================
// COLLECTION
// ================================

gsap.utils.toArray(".card").forEach((card,index)=>{

gsap.from(card,{

scrollTrigger:{

trigger:card,

start:"top 85%"

},

y:80,

opacity:0,

duration:1,

delay:index*.08,

ease:"power3.out"

});

});

// ================================
// STORY
// ================================

gsap.from(".story-image",{

scrollTrigger:{

trigger:".story-preview",

start:"top 75%"

},

x:-120,

opacity:0,

duration:1.5

});

gsap.from(".story-content",{

scrollTrigger:{

trigger:".story-preview",

start:"top 75%"

},

x:120,

opacity:0,

duration:1.5

});

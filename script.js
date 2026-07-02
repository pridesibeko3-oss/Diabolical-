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
/*==========================================
JOURNAL ANIMATIONS
==========================================*/

gsap.utils.toArray(".journal-card").forEach((card,index)=>{

gsap.from(card,{

scrollTrigger:{

trigger:card,

start:"top 85%"

},

opacity:0,

y:70,

duration:1,

delay:index*.15,

ease:"power3.out"

});

});

/*==========================================
NEWSLETTER
==========================================*/

gsap.from(".newsletter-box",{

scrollTrigger:{

trigger:".newsletter",

start:"top 75%"

},

opacity:0,

scale:.92,

duration:1.3,

ease:"power4.out"

});

/*==========================================
PARALLAX IMAGES
==========================================*/

gsap.utils.toArray(".story-image img,.journal-card img").forEach(image=>{

gsap.to(image,{

scrollTrigger:{

trigger:image,

scrub:true

},

y:-60,

ease:"none"

});

});

/*==========================================
MAGNETIC BUTTONS
==========================================*/

document.querySelectorAll(

".gold-button,.outline-button,.newsletter-form button"

).forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)/6;

const moveY=(y-rect.height/2)/6;

button.style.transform=

`translate(${moveX}px,${moveY}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});

/*==========================================
FLOATING PARTICLES
==========================================*/

const canvas=document.createElement("canvas");

canvas.id="particles";

document.body.appendChild(canvas);

const ctx=canvas.getContext("2d");

function resizeCanvas(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

const particles=[];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2+1,

v:Math.random()*0.3+0.1

});

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(212,175,55,.25)";

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

p.y-=p.v;

if(p.y<0){

p.y=canvas.height;

p.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(animateParticles);

}

animateParticles();

/*==========================================
LOADING SCREEN
==========================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

gsap.to(loader,{

opacity:0,

duration:1,

onComplete:()=>loader.remove()

});

}

});

/*==========================================
SMOOTH PAGE FADE
==========================================*/

document.querySelectorAll("a").forEach(link=>{

const href=link.getAttribute("href");

if(

href &&

!href.startsWith("#") &&

!href.startsWith("http")

){

link.addEventListener("click",(e)=>{

e.preventDefault();

gsap.to("body",{

opacity:0,

duration:.4,

onComplete:()=>{

window.location=href;

}

});

});

}

});

gsap.from("body",{

opacity:0,

duration:.8

});

const stars = document.getElementById("stars");
const meteors = document.getElementById("meteors");

/* ==========================
   ⭐ BINTANG
========================== */

for(let i=0;i<350;i++){

const star=document.createElement("div");

const size=Math.random()*3+1;

star.style.position="absolute";
star.style.width=size+"px";
star.style.height=size+"px";
star.style.borderRadius="50%";
star.style.background="white";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

star.style.opacity=Math.random();

star.animate(

[
{opacity:.2,transform:"scale(.8)"},
{opacity:1,transform:"scale(1.4)"},
{opacity:.3,transform:"scale(1)"}
],

{

duration:1500+Math.random()*3500,

iterations:Infinity

}

);

stars.appendChild(star);

}

/* ==========================
   🌠 METEOR
========================== */

function meteor(){

const m=document.createElement("div");

m.style.position="absolute";

m.style.width="180px";

m.style.height="2px";

m.style.background="linear-gradient(to right,#fff,#8fd8ff,transparent)";

m.style.boxShadow="0 0 20px #8fd8ff";

m.style.left="-200px";

m.style.top=Math.random()*25+"vh";

/* diagonal */
m.style.transform="rotate(35deg)";

meteors.appendChild(m);

m.animate(

[
{
transform:"translate(0,0) rotate(35deg)",
opacity:1
},

{
transform:"translate(130vw,70vh) rotate(35deg)",
opacity:0
}

],

{

duration:1800,

easing:"linear"

}

);

setTimeout(()=>m.remove(),1800);

}

setInterval(()=>{

meteor();

},20000+Math.random()*15000);

/* ==========================
   💌 AMPLOP & SURAT
========================== */

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

const home = document.getElementById("home");
const letterPage = document.getElementById("letterPage");

const typing = document.getElementById("typing");

const music = document.getElementById("bgMusic");

const text = `Untuk Fanny...

Kalau suatu hari kamu merasa lelah, berhentilah sejenak, bukan untuk menyerah, tetapi untuk mengumpulkan kembali semangatmu.

Aku tahu hidup tidak selalu mudah. Ada hari ketika semuanya terasa berat, ada mimpi yang terasa jauh, dan ada malam ketika kita hanya ingin diam.

Tetapi percayalah...

Setiap langkah kecil yang kamu ambil tetap berarti.

Pelan bukan berarti gagal.

Beristirahat bukan berarti menyerah.

Aku berharap suatu hari nanti kamu melihat ke belakang dan tersenyum karena ternyata semua perjuanganmu membawa kamu sejauh ini.

Tetaplah menjadi dirimu sendiri.

Tetaplah bermimpi.

Tetaplah kuat.

Karena aku percaya, masa depanmu masih menyimpan banyak hal indah yang sedang menunggumu.

— Fikri`;

openBtn.onclick=()=>{

home.style.opacity="0";

home.style.transform="scale(.9)";

setTimeout(()=>{

home.style.display="none";

letterPage.style.display="flex";

music.play().catch(()=>{});

typeText();

},700);

};

closeBtn.onclick=()=>{

location.reload();

};

function typeText(){

typing.innerHTML="";

let i=0;

const speed=40;

const timer=setInterval(()=>{

typing.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},speed);

}

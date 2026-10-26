const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const typing = document.getElementById("typing");

const stars = document.getElementById("stars");
const clouds = document.getElementById("clouds");
const particles = document.getElementById("particles");

const text=`Untuk Fanny...

Kalau suatu hari kamu merasa hidup terasa berat...

Jangan lupa...

Kamu jauh lebih kuat daripada yang kamu kira.

Aku tahu mungkin ada hari-hari
yang membuatmu lelah.

Ada saat ketika semuanya terasa sepi.

Tetapi...

Jangan pernah menyerah.

Percayalah...

Masa lalu bukan penentu masa depanmu.

Kamu tetap berharga.

Kamu tetap pantas dicintai.

Kamu tetap pantas mengejar semua mimpimu.

Kalau langkahmu hari ini terasa pelan...

Tidak apa-apa.

Yang penting jangan berhenti.

Semoga suatu hari nanti...

Kamu bisa melihat ke belakang...

Lalu tersenyum...

Dan berkata...

"Aku berhasil melewati semuanya."

Terima kasih karena tetap menjadi dirimu sendiri.

Semoga Allah selalu menjaga setiap langkahmu.

🤍

— Fikri`;

let i=0;

function typeWriter(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,28);

}

}

openBtn.onclick=()=>{

envelope.style.transform="scale(.85)";
envelope.style.opacity="0";

setTimeout(()=>{

envelope.style.display="none";

letter.style.display="block";

typing.innerHTML="";

i=0;

typeWriter();

},500);

}

closeBtn.onclick=()=>{

letter.style.display="none";

envelope.style.display="block";

envelope.style.opacity="1";

envelope.style.transform="scale(1)";

}

function createStar(){

const s=document.createElement("div");

s.className="star";

const size=Math.random()*3+1;

s.style.width=size+"px";

s.style.height=size+"px";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDuration=(2+Math.random()*4)+"s";

stars.appendChild(s);

}

for(let x=0;x<250;x++){

createStar();

}

function createCloud(){

const c=document.createElement("div");

c.className="cloud";

c.style.width=(120+Math.random()*180)+"px";

c.style.height=(45+Math.random()*40)+"px";

c.style.top=Math.random()*35+"vh";

c.style.left="-300px";

c.style.animationDuration=(35+Math.random()*40)+"s";

clouds.appendChild(c);

}

for(let x=0;x<6;x++){

setTimeout(createCloud,x*6000);

}

function createParticle(){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"vw";

const size=Math.random()*4+2;

p.style.width=size+"px";

p.style.height=size+"px";

p.style.animationDuration=(6+Math.random()*5)+"s";

particles.appendChild(p);

setTimeout(()=>{

p.remove();

},11000);

}

setInterval(createParticle,250);

// Bintang jatuh

setInterval(()=>{

const meteor=document.createElement("div");

meteor.style.position="fixed";

meteor.style.width="140px";

meteor.style.height="2px";

meteor.style.background="linear-gradient(to right,#fff,#6ec6ff,transparent)";

meteor.style.left=Math.random()*80+"vw";

meteor.style.top=Math.random()*30+"vh";

meteor.style.transform="rotate(-35deg)";

meteor.style.boxShadow="0 0 20px #6ec6ff";

meteor.style.zIndex="0";

meteor.style.transition="2s linear";

document.body.appendChild(meteor);

setTimeout(()=>{

meteor.style.left=(parseFloat(meteor.style.left)+25)+"vw";

meteor.style.top=(parseFloat(meteor.style.top)+40)+"vh";

meteor.style.opacity="0";

},50);

setTimeout(()=>{

meteor.remove();

},2200);

},9000);

const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

const text = `Untuk Fanny...

Kalau suatu hari langkahmu terasa berat,
berhentilah sejenak.

Bukan untuk menyerah.

Tetapi untuk mengingat
bahwa kamu sudah sejauh ini.

Jangan takut berjalan pelan.

Langit malam tidak pernah
terburu-buru menjadi pagi.

Namun pada akhirnya,
matahari tetap terbit.

Begitu juga dengan dirimu.

Percayalah...

Semua perjuanganmu
tidak akan sia-sia.

— Fikri`;

let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;
    opened = true;

    // Flap membuka
    flap.style.transform = "rotateX(180deg)";

    // Surat keluar perlahan
    setTimeout(() => {
        letter.style.transform = "translateY(-170px)";
    }, 600);

    // Surat membesar
    setTimeout(() => {
        letter.style.transition = "1s";
        letter.style.transform =
            "translateY(-170px) scale(2)";
        letter.style.zIndex = "20";
    }, 1700);

    // Mulai mengetik
    setTimeout(() => {
        typeText();
    }, 2700);

});

function typeText() {

    let i = 0;

    const timer = setInterval(() => {

        typing.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

        }

    }, 35);

}

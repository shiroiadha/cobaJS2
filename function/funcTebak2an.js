function tebakAngka() {
    var random = Math.floor(Math.random() * 101);
    let angka = prompt("Masukan Angka : ");

    while (angka != null && angka != random) { // Biar nilai random ga berubah selama user nebak
        if (angka > random) {
            alert("Angka terlalu besar!");
        } else {
            alert("Angka terlalu kecil!");
        }
        angka = prompt("Masukan Angka : ");
        if (angka == null) {
            break;
        }
    }

    if (angka == random) {
        alert("Selamat! Anda berhasil menebak angka.");
    } else {
        alert("Permainan dibatalkan!");
    }
}
let modal;

function showModal() {
    const getModal = document.getElementById('confPassModal');
    modal = new bootstrap.Modal(getModal);
    modal.show();
}

function tampilkanPassword() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const type = password.type === "password" ? "text" : "password";

    password.type = type;
    confirmPassword.type = type;
}

function ConfirmPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password == "" || confirmPassword == "") {
        alert("Mohon isi password dan konfirmasi password.");
        return false;
    } else if (password != confirmPassword) {
        alert("Password tidak sama, harap isi kembali.");
        return false;
    } else {
        // Regex
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{}|;:'",.<>\/?`~]/.test(password);

        let errorMessages = [];

        if (!hasUppercase) errorMessages.push("- Mohon tambahkan setidaknya satu huruf kapital (A-Z)");
        if (!hasLowercase) errorMessages.push("- Mohon tambahkan setidaknya satu huruf kecil (a-z)");
        if (!hasNumber) errorMessages.push("- Mohon tambahkan setidaknya satu angka (0-9)");
        if (!hasSpecialChar) errorMessages.push("- Mohon tambahkan setidaknya satu karakter khusus (!@#$%^&*...)");

        if (errorMessages.length > 0) {
            alert("Password tidak memenuhi kriteria:\n" + errorMessages.join("\n"));
            return false;
        }

        alert("Selamat! Password anda memenuhi kriteria.");
        modal.hide();
        return true;
    }
}
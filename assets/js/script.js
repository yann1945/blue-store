let qrisTimeout;

function openQris() {
    document.getElementById("qrisModal").classList.remove("hidden");
    document.getElementById("qrisOverlay").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("qrisModal").classList.add("opacity-100", "translate-y-0");
        document.getElementById("qrisOverlay").classList.add("opacity-100");
    }, 10);

    // Timer 60 detik
    let timeLeft = 60;
    document.getElementById("qrisTimer").innerHTML = `Sisa waktu: <span class="font-bold">${timeLeft}</span> detik`;
    qrisTimeout = setInterval(() => {
        timeLeft--;
        document.getElementById("qrisTimer").innerHTML = `Sisa waktu: <span class="font-bold">${timeLeft}</span> detik`;
        if (timeLeft <= 0) {
            closeQris();
        }
    }, 1000);
}

function closeQris() {
    clearInterval(qrisTimeout);
    document.getElementById("qrisModal").classList.remove("opacity-100", "translate-y-0");
    document.getElementById("qrisOverlay").classList.remove("opacity-100");
    setTimeout(() => {
        document.getElementById("qrisModal").classList.add("hidden");
        document.getElementById("qrisOverlay").classList.add("hidden");
    }, 300);
}

function downloadQris() {
    const link = document.createElement("a");
    link.href = "../assets/image/qris.jpg";
    link.download = "QRIS_Pembayaran.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showSuccess() {
    document.getElementById("qrisSuccess").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("qrisSuccess").classList.add("hidden");
    }, 3000);
}

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("sidebar-toggle");

// Fungsi buka sidebar
function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
}

// Fungsi tutup sidebar
function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
}

// Event listener
toggleBtn.addEventListener("click", openSidebar);
overlay.addEventListener("click", closeSidebar);
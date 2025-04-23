let qrisTimeout;
let sidebarOpen = false;

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    
    sidebarOpen = !sidebarOpen;
    
    if (sidebarOpen) {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    } else {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    
    sidebarOpen = false;
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const overlay = document.getElementById("overlay");
    
    sidebarToggle.addEventListener("click", toggleSidebar);
    overlay.addEventListener("click", closeSidebar);
    
    // Untuk layar besar, tampilkan sidebar secara default
    if (window.innerWidth >= 768) {
        document.getElementById("sidebar").classList.add("active");
    }
});

function openQris() {
    document.getElementById("qrisModal").style.display = "flex";
    document.getElementById("qrisOverlay").style.display = "block";
    
    setTimeout(() => {
        document.getElementById("qrisModal").style.opacity = "1";
        document.getElementById("qrisModal").style.transform = "translateY(0)";
        document.getElementById("qrisOverlay").style.opacity = "1";
    }, 10);

    // Timer 60 detik
    let timeLeft = 10;
    document.getElementById("qrisTimer").innerHTML = Sisa waktu: <span class="timer-count">${timeLeft}</span> detik;
    qrisTimeout = setInterval(() => {
        timeLeft--;
        document.getElementById("qrisTimer").innerHTML = Sisa waktu: <span class="timer-count">${timeLeft}</span> detik;
        if (timeLeft <= 0) {
            closeQris();
        }
    }, 1000);
}

function closeQris() {
    clearInterval(qrisTimeout);
    document.getElementById("qrisModal").style.opacity = "0";
    document.getElementById("qrisModal").style.transform = "translateY(2.5rem)";
    document.getElementById("qrisOverlay").style.opacity = "0";
    
    setTimeout(() => {
        document.getElementById("qrisModal").style.display = "none";
        document.getElementById("qrisOverlay").style.display = "none";
    }, 300);
}

function downloadQris() {
    const link = document.createElement("a");
    link.href = "https://blue-store-taupe.vercel.app/assets/image/qris.jpg";
    link.download = "QRIS_Pembayaran.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showSuccess() {
    document.getElementById("qrisSuccess").style.display = "block";
    setTimeout(() => {
        document.getElementById("qrisSuccess").style.display = "none";
    }, 3000);
    closeQris();
}

// Menutup sidebar saat layar di-resize ke ukuran besar
window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) {
        document.getElementById("sidebar").classList.add("active");
        document.getElementById("overlay").classList.remove("active");
    } else if (!sidebarOpen) {
        document.getElementById("sidebar").classList.remove("active");
    }
});

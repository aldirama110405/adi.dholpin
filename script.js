// script.js
// Tambahkan interaktivitas jika diperlukan, seperti animasi scroll atau validasi formulir
document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan animasi atau interaktivitas sesuai kebutuhan
});


// JavaScript to handle the popup
function openPopup(paketId) {
    const popup = document.getElementById('paket-popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');
    
    // Set content based on paketId
    if (paketId === 'paket-a') {
        title.textContent = "Paket A - Bali";
        description.textContent = "Menikmati keindahan pantai di Bali selama 3 hari, menjelajahi tempat-tempat ikonik seperti Uluwatu, Tanah Lot, dan banyak lagi.";
    } else if (paketId === 'paket-b') {
        title.textContent = "Paket B - Labuan Bajo";
        description.textContent = "Petualangan laut di Labuan Bajo dengan 5 hari penuh, termasuk trip ke Pulau Komodo dan snorkeling di Pink Beach.";
    } else if (paketId === 'paket-c') {
        title.textContent = "Paket C - Gili Trawangan";
        description.textContent = "Liburan eksklusif di Gili Trawangan selama 4 hari dengan kegiatan menyelam, bersepeda, dan menikmati pantai yang menakjubkan.";
    } else if (paketId === 'paket-d') {
        title.textContent = "Paket D - Raja Ampat";
        description.textContent = "Wisata laut di Raja Ampat dengan 7 hari penuh, menjelajahi surga bawah laut dan pulau-pulau indah yang jarang terjamah.";
    } else if (paketId === 'paket-e') {
        title.textContent = "Paket E - Komodo";
        description.textContent = "Petualangan seru di Komodo selama 5 hari, melihat langsung hewan langka Komodo dan menjelajahi pantai-pantai yang eksotis.";
    } else if (paketId === 'paket-f') {
        title.textContent = "Paket F - Sulawesi";
        description.textContent = "Eksplorasi keindahan pulau-pulau di Sulawesi dengan 6 hari perjalanan, mencakup Tana Toraja dan keindahan Bunaken.";
    }
    // Add more conditions for other packages...

    popup.style.display = "flex"; // Show the popup
}

function closePopup() {
    const popup = document.getElementById('paket-popup');
    popup.style.display = "none"; // Hide the popup
}

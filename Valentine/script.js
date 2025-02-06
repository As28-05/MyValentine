document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to our love story ❤️");
});

document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById('lightbox-img').src = this.src;
        document.getElementById('lightbox').style.display = 'flex';
    });
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.getElementById("more-btn").addEventListener("click", function() {
    document.getElementById("love-message").style.display = "block";
});

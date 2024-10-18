document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;
    const images = document.querySelectorAll('.gallery-img');

    function openLightbox(index) {
        lightbox.style.display = 'block';
        lightboxImg.src = images[index].src.replace('300/200', '1200/800');
        caption.textContent = images[index].alt;
        currentIndex = index;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    }

    gallery.addEventListener('click', function(e) {
        if (e.target.classList.contains('gallery-img')) {
            const index = Array.from(images).indexOf(e.target);
            openLightbox(index);
        }
    });

    close.addEventListener('click', closeLightbox);
    prev.addEventListener('click', showPrev);
    next.addEventListener('click', showNext);

    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                showPrev();
            } else if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.lazy-image');

    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 300px 0px"
    };

    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imgObserver.unobserve(img);
        });
    }, imgOptions);

    images.forEach(img => imgObserver.observe(img));
});
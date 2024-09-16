document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-scroller img');
    const scrollerContainer = document.querySelector('.scroller-container');

    scrollerContainer.addEventListener('scroll', () => {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            const imgCenter = rect.left + rect.width / 2;
            const containerCenter = scrollerContainer.getBoundingClientRect().left + scrollerContainer.clientWidth / 2;

            // Check if the image is near the center of the scroller container
            if (Math.abs(containerCenter - imgCenter) < rect.width / 2) {
                img.style.transform = 'scale(1.2)';
                img.style.filter = 'brightness(1.2)';
            } else {
                img.style.transform = 'scale(1)';
                img.style.filter = 'brightness(1)';
            }
        });
    });
});

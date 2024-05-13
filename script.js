let index = 0;

function nextSlide() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    index = (index + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const carouselContent = document.querySelector('.carousel-content');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const itemWidth = carouselItems[0].clientWidth;

    carouselContent.style.transform = `translateX(-${index * itemWidth}px)`;
}
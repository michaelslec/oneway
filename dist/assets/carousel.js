const carouselButtons = document.querySelectorAll('[data-offset]');

carouselButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = parseInt(button.dataset.offset);

        const slides = document.querySelectorAll(".slide");
        const currentSlide = document.querySelector('[data-active]');

        let newSlideIndex = [...slides].indexOf(currentSlide) + offset;
        if (newSlideIndex < 0) newSlideIndex = slides.length - 1;
        else if (newSlideIndex > slides.length - 1) newSlideIndex = 0;

        slides[newSlideIndex].dataset.active = true;
        delete currentSlide.dataset.active;
    })
})
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

sliderItems.forEach((slide, index) => {

    // Hide prev and next slide
    if (index !== 0) slide.classList.add('hidden');

    // add Index
    slide.dataset.index = index;

    // Add data active
    sliderItems[0].setAttribute('data-active', '');

    /* Hide main slide
    show Next slide */
    slide.addEventListener('click', function() {
        showNextSlide('next');
    })
}); 

btnNext.onclick = function() {
    showNextSlide('next');
};

btnPrev.onclick = function() {
    showNextSlide('prev');
};


function showNextSlide(direction) {
    const currentSlide = slider.querySelector('[data-active]');
    const currentIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');


    let nextIndex;
    if (direction === 'next') {
        nextIndex = currentIndex + 1 === sliderItems.length ? 0 : currentIndex + 1;
    } else if (direction === 'prev') {
        nextIndex = currentIndex === 0 ? sliderItems.length - 1 : currentIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}
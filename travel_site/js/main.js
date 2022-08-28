var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startPosition: 1,
    items: 3,
    responsive : {
        850 : {
            startPosition: 1,
            items: 3,
        },

        1000 : {
            margin: 20,
            items: 3,
        },

        1200 : {
            margin: 30,
        },
    },
});


$('.slider__btn--prew').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.slider__btn--next').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

const navButton = document.querySelector('.nav__toggle');
const nav =document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');

navButton.onclick = function () {
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll')
    menuIcon.classList.toggle('menu-icon--active');
};
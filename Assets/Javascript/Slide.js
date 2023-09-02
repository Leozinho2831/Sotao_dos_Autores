// const initialLinks = [
//     'Assets/Pages/Capítulos-second-life.html',
//     'Assets/Pages/Capítulos-Magnum.html',
//     'Assets/Pages/Capítulos-Imperfeito.html',
//     'Assets/Pages/Capítulos-Destino.html'
// ];

// slide 3600ms

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    keyboard: {
        enabled: true,
    },
});
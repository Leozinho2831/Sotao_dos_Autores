const initialLinks = [
    'Assets/Pages/Capítulos-second-life.html',
    'Assets/Pages/Capítulos-Magnum.html',
    'Assets/Pages/Capítulos-Imperfeito.html',
    'Assets/Pages/Capítulos-Destino.html'
];

const imgContainer = document.getElementById("slide");
const imgList = imgContainer.querySelectorAll("img");
let idx = 0;
let isTransitionInProgress = false;

function slide() {
    if (isTransitionInProgress) {
        return;
    }

    let nextIdx = idx + 1;

    if (nextIdx > imgList.length - 1) {
        nextIdx = 0;
    }

    const windowWidth = window.innerWidth;
    let responsiveOffset;

    if (windowWidth < 560) {
        responsiveOffset = 550 * 0.4542;
    } else {
        responsiveOffset = 550 * 0.98;
    }

    imgContainer.style.transform = `translateX(${-nextIdx * responsiveOffset}px)`;
    isTransitionInProgress = true;

    const link = document.getElementById("linkAnchor");
    link.href = initialLinks[nextIdx];
}

const initialLink = document.getElementById("linkAnchor");
initialLink.href = initialLinks[0];

setInterval(slide, 3600);

imgContainer.addEventListener('transitionend', () => {
    idx++;

    if (idx > imgList.length - 1) {
        idx = 0;
    }

    isTransitionInProgress = false;

    const link = document.getElementById("linkAnchor");
    link.href = initialLinks[idx];
});


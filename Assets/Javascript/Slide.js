const imgs = document.getElementById("slide");
const img = document.querySelectorAll("#slide img");
        
let idx = 0;

function slide(){
    idx++;

    if (idx > img.length - 1){
         idx = 0;
    }

    const windowWidth = window.innerWidth;

    const responsiveOffset = 550 * (windowWidth <= 570 ? 0.453 : 0.98);

    imgs.style.transform = `translateX(${-idx * responsiveOffset}px)`;
}

setInterval(slide, 4800);
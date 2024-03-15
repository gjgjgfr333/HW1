let naw =document.getElementById('naw')
let burger = document.getElementById('burger')
burger.addEventListener('click',function(){
    naw.classList.toggle('nawMenuAnim')
})
burger.addEventListener("click", function (){
    burger.classList.toggle('burger-to-cross')
})


let container = document.querySelector('.container');
let startX;
let currentImage = 0;
let images = document.querySelectorAll('.ing');
const imageWidth = images[0].clientWidth + 60;

container.style.transition = 'transform 0.5s ease';

container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

container.addEventListener('touchmove', (e) => {
    let touchEndX = e.touches[0].clientX;
    let diffX = startX - touchEndX;

    if (diffX > 0 && currentImage < images.length - 1) {
        container.style.transform = `translateX(-${imageWidth * (currentImage + 1)}px)`;
    }
    else if (diffX < 0 && currentImage > 0) {
        container.style.transform = `translateX(-${imageWidth * (currentImage - 1)}px)`;
    }
});

container.addEventListener('touchend', (e) => {
    let touchEndX = e.changedTouches[0].clientX;
    let diffX = startX - touchEndX;

    if (diffX > 0 && currentImage < images.length - 1) {
        currentImage++;
    } else if (diffX < 0 && currentImage > 0) {
        currentImage--;
    }
    updateDots(dots,currentImage,'round_darck','round_black');
    container.style.transform = `translateX(-${imageWidth * currentImage}px)`;
});
let dots = document.querySelectorAll('.round_black');
function updateDots(dot,imageCurrent, styleOn, styleOf) {

    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove(styleOn);
        dot[i].classList.add(styleOf);
    }

    if (dot[imageCurrent]) {
        dot[imageCurrent].classList.add(styleOn);
        dot[imageCurrent].classList.remove(styleOf);
    }
}

updateDots(dots,currentImage,'round_darck','round_black');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentImage = index;
        updateDots(dots,currentImage,'round_darck','round_black');

        container.style.transform = `translateX(-${imageWidth * currentImage}px)`;
    });
});


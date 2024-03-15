let container1 = document.querySelector('.container1');
let startX1;
let currentImage1 = 0;
let images1 = document.querySelectorAll('.ingDesktop');
const imageWidth1 = images1[0].clientWidth + 20; // Ширина изображения + промежуток (25px)

container1.style.transition = 'transform 0.5s ease'; // Добавляем плавное анимированное перемещение

container1.addEventListener('touchstart', (e) => {
    startX1 = e.touches[0].clientX;
});

container1.addEventListener('touchmove', (e) => {
    let touchEndX = e.touches[0].clientX;
    let diffX = startX1 - touchEndX;

    // Если свайп влево и не достигнут конец слайдера
    if (diffX > 0 && currentImage1 < images1.length - 1) {
        container1.style.transform = `translateX(-${imageWidth1 * (currentImage1 + 1)}px)`;
    }
    // Если свайп вправо и не достигнут начало слайдера
    else if (diffX < 0 && currentImage1 > 0) {
        container1.style.transform = `translateX(-${imageWidth1 * (currentImage1 - 1)}px)`;
    }
});

let desctopDots = document.querySelectorAll('.round_black1')
container1.addEventListener('touchend', (e) => {
    let touchEndX = e.changedTouches[0].clientX;
    let diffX = startX1 - touchEndX;

    // Определяем максимальное значение currentImage1
    let maxImage = images1.length > 3 ? images1.length - 3 : 0;

    // Проверяем, если свайп влево и не достигнут конец слайдера, или свайп вправо и не достигнут начало слайдера
    if ((diffX > 0 && currentImage1 < maxImage) || (diffX < 0 && currentImage1 > 0)) {
        if (diffX > 0) {
            currentImage1++;
        } else if (diffX < 0) {
            currentImage1--;
        }
    }

    updateDots(desctopDots,currentImage1,'round_darck','round_black')
    container1.style.transform = `translateX(-${imageWidth1 * currentImage1}px)`;

});
updateDots(desctopDots,currentImage1,'round_darck','round_black')

desctopDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentImage1 = index;
        updateDots(desctopDots,currentImage1,'round_darck','round_black');

        container1.style.transform = `translateX(-${imageWidth1 * currentImage1}px)`;
    });
});
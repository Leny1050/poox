window.addEventListener('load', function() {
    const image = document.getElementById('popup-image');
    const sound = document.getElementById('popup-sound');

    // Изображение плавно появляется через 0.5 секунд
    setTimeout(() => {
        image.style.opacity = 1;
    }, 500);

    // Воспроизведение звука после появления изображения
    image.addEventListener('transitionend', function() {
        sound.play().catch((error) => {
            console.log('Ошибка при воспроизведении звука:', error);
        });
    });
});

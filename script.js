window.addEventListener('load', function() {
    const image = document.getElementById('popup-image');
    const sound = document.getElementById('popup-sound');

    // Воспроизводим звук
    sound.play();

    // Плавное появление и начало мигания изображения
    setTimeout(() => {
        image.style.transform = 'scale(1)';
    }, 100); // Небольшая задержка для эффекта выскакивания
});

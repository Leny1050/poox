window.addEventListener('load', function() {
    const image = document.getElementById('popup-image');
    const sound = document.getElementById('popup-sound');

    // Резкое появление изображения
    setTimeout(() => {
        image.style.opacity = 1;
        sound.play().catch((error) => {
            console.log('Ошибка при воспроизведении звука:', error);
        });
    }, 100); // Задержка перед появлением (100 мс)
});

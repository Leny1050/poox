window.addEventListener('load', function() {
    const image = document.getElementById('popup-image');
    const sound = document.getElementById('popup-sound');
    const text = document.getElementById('popup-text');
    let volume = 0;

    // Обработчик для начала воспроизведения звука
    const startInteraction = () => {
        // Воспроизводим звук
        sound.play().catch((error) => {
            console.log('Звук не воспроизведён:', error);
        });

        // Постепенное увеличение громкости звука
        const volumeInterval = setInterval(() => {
            if (volume < 1) {
                volume += 0.05;
                sound.volume = volume;
            } else {
                clearInterval(volumeInterval);
            }
        }, 200); // Каждые 200 мс увеличиваем громкость

        // Плавное появление текста
        setTimeout(() => {
            text.style.opacity = 1;
        }, 1000); // Текст появится через 1 секунду

        // Плавное появление изображения
        setTimeout(() => {
            image.style.opacity = 1;
        }, 500); // Изображение появится через 0.5 секунды

        // Убираем обработчик после первого взаимодействия
        window.removeEventListener('touchstart', startInteraction);
        window.removeEventListener('click', startInteraction);
    };

    // Для мобильных устройств добавляем событие touchstart
    window.addEventListener('touchstart', startInteraction);
    // Для компьютеров добавляем событие click
    window.addEventListener('click', startInteraction);
});

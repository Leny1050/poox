window.addEventListener('load', function() {
    const image = document.getElementById('popup-image');
    const sound = document.getElementById('popup-sound');
    const text = document.getElementById('popup-text');
    let volume = 0;

    // Постепенное увеличение громкости звука
    sound.volume = volume;
    sound.play();

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
    }, 2000);

    // Плавное появление и начало мигания изображения
    setTimeout(() => {
        image.style.transform = 'scale(1)';
        image.style.animation = 'shake 0.2s infinite'; // Эффект дрожания
    }, 100);
});

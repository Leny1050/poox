window.addEventListener('load', function() {
    const image = document.getElementById('popup-image');
    const sound = document.getElementById('popup-sound');
    const button = document.getElementById('start-button');
    const buttonContainer = document.getElementById('button-container');
    const popupContainer = document.getElementById('popup-container');

    // Обработчик клика на кнопку
    button.addEventListener('click', function() {
        // Скрываем кнопку
        buttonContainer.style.display = 'none';

        // Показываем контейнер с изображением
        popupContainer.style.display = 'block';

        // Резкое появление изображения и воспроизведение звука
        setTimeout(() => {
            image.style.opacity = 1;
            sound.play().catch((error) => {
                console.log('Ошибка при воспроизведении звука:', error);
            });
        }, 100); // Задержка перед появлением (100 мс)
    });
});

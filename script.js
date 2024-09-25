window.addEventListener('load', function() {
    const image = document.getElementById('popup-image');
    const sound = document.getElementById('popup-sound');
    const button = document.getElementById('start-button');
    const buttonContainer = document.getElementById('button-container');
    const popupContainer = document.getElementById('popup-container');

    // Массив со звуковыми файлами
    const sounds = [
        "https://cdn.freesound.org/previews/721/721532_13999124-lq.mp3",
        "https://cdn.freesound.org/previews/572/572499_12522405-lq.mp3", 
        "https://cdn.freesound.org/previews/104/104039_179538-lq.mp3",
        "https://cdn.freesound.org/previews/239/239901_4079949-lq.mp3",
        "https://cdn.freesound.org/previews/671/671202_13659822-lq.mp3"
    ];

    // Обработчик клика на кнопку
    button.addEventListener('click', function() {
        // Скрываем кнопку
        buttonContainer.style.display = 'none';

        // Показываем контейнер с изображением
        popupContainer.style.display = 'block';

        // Выбор случайного звука
        const randomIndex = Math.floor(Math.random() * sounds.length);
        sound.src = sounds[randomIndex]; // Устанавливаем случайный звук

        // Резкое появление изображения и воспроизведение звука
        setTimeout(() => {
            image.style.opacity = 1;
            sound.play().catch((error) => {
                console.log('Ошибка при воспроизведении звука:', error);
            });
        }, 100); // Задержка перед появлением (100 мс)
    });
});

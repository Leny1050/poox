window.addEventListener('load', function() {
    const image = document.getElementById('popup-image');
    const sound = document.getElementById('popup-sound');
    const button = document.getElementById('start-button');
    const buttonContainer = document.getElementById('button-container');
    const popupContainer = document.getElementById('popup-container');

    const sounds = [
        "https://cdn.freesound.org/previews/721/721532_13999124-lq.mp3",
        "https://cdn.freesound.org/previews/572/572499_12522405-lq.mp3", 
        "https://cdn.freesound.org/previews/104/104039_179538-lq.mp3",
        "https://cdn.freesound.org/previews/239/239901_4079949-lq.mp3",
        "https://cdn.freesound.org/previews/671/671202_13659822-lq.mp3"
    ];

    button.addEventListener('click', playSound);
    button.addEventListener('touchstart', playSound);

    function playSound() {
        buttonContainer.style.display = 'none';
        popupContainer.style.display = 'block';

        const randomIndex = Math.floor(Math.random() * sounds.length);
        sound.src = sounds[randomIndex];

        setTimeout(() => {
            image.style.opacity = 1;
            sound.play().catch((error) => {
                console.log('Ошибка при воспроизведении звука:', error);
            });
        }, 10);
    }
});

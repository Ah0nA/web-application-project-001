const memes = [
    { image: 'images/paka.jpeg', captions: ['Ukijifanya hutaki food kwa wenyewe halafu akose kukuforce', 'Unawekea Rich Kid Strungi halafu anakuuliza ati... Oh, you also make wine?'] },
    { image: 'images/kulipwa.jpeg', captions: ['Nimetuma 30bob kwa wrong number', 'Na si nimelipwa juzi'] },
    { image: 'images/facebook.jpeg', captions: ['Next year we are dating girls with real eyebrows', 'Facebook: People you may know'] },
    { image: 'images/uhuru.jpeg', captions: ['Why are you like this Nomfus?', 'Na nyinyi watu wa mtura muanze kupika mapema ju ya mvua ya Elnino.'] },
    { image: 'images/shoc.jpeg', captions: ['why are you gay?', 'Random child: Anko, si ungesema tuweke tu GTA'] },
];

let currentMemeIndex;

function generateMeme() {
    currentMemeIndex = Math.floor(Math.random() * memes.length);

    const memeContainer = document.getElementById('meme-container');
    memeContainer.innerHTML = `<img src="${memes[currentMemeIndex].image}" alt="Meme">`;

    resetButtonStyles();

    const optionsContainer = document.getElementById('options-container');
    const captions = memes[currentMemeIndex].captions;
    shuffleArray(captions);
    optionsContainer.innerHTML = `
        <button class="option" onclick="checkAnswer(0)">${captions[0]}</button>
        <button class="option" onclick="checkAnswer(1)">${captions[1]}</button>
    `;
}

function checkAnswer(selectedIndex) {
    const correctCaption = memes[currentMemeIndex].captions[0]; // The correct caption is always at index 0
    const buttons = document.querySelectorAll('.option');

    if (buttons[selectedIndex].innerText === correctCaption) {
        buttons[selectedIndex].classList.add('correct');
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons.forEach((button, index) => {
            if (button.innerText === correctCaption) {
                buttons[index].classList.add('correct');
            }
        });
    }

    buttons.forEach(button => button.setAttribute('disabled', 'true'));
}

function resetButtonStyles() {
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.removeAttribute('disabled');
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

generateMeme();

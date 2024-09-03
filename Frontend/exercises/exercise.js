
const button = document.getElementById('button');
const hiddenMessage = document.getElementById('hiddenMessage');
const duckButton = document.getElementById('duckButton')
const duckMessage = document.getElementById('duckMessage')
const duckImage = document.getElementById('duckImage')
const easterEgg = document.getElementById('easterEgg')
const questionsList = document.getElementById('questionList')
const duckInput = document.getElementById('duckInput')
const questionsArray = [];
let id = 1;


button.addEventListener('mouseenter', function () {
    hiddenMessage.className = 'show';
});


button.addEventListener('mouseleave', function () {
    hiddenMessage.className = 'hidden';
});

duckButton.addEventListener('click', function () {
    duckMessage.className = 'show';

    const question = document.createElement('li');
    question.textContent = duckInput.value;
    console.log(duckInput.value)
    questionsList.appendChild(question);



    localStorage.setItem(id, duckInput.value);
    id++;



    setTimeout(() => {
        duckMessage.className = 'hidden';
    }, "3000");
})

duckImage.addEventListener('mouseenter', function () {
    duckMessage.textContent = 'Ask me something!'
    duckMessage.className = 'show'
    easterEgg.className = 'easterEggShow'
})

duckImage.addEventListener('mouseleave', function () {
    duckMessage.textContent = 'Good luck with that!'
    duckMessage.className = 'hidden'
    easterEgg.className = 'easterEggHidden'
})


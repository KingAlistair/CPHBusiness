
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

const jokeButton = document.getElementById('jokeButton')
const answer = document.getElementById('answer')

window.addEventListener('load', function() {
    const userName = prompt("What is your name?");

    const greeting = `Hello, ${userName}!`;

    document.getElementById('greeting').textContent = greeting;
});

const formattedDate = () => {
    const date = new Date();
    const day = date.getDate(); 
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours(); 
    const minutes = date.getMinutes();

    return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

duckImage.title = formattedDate();

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


jokeButton.addEventListener('click', ()=>{

fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        answer.innerText = data.joke;
         
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


})
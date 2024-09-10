
const input = document.getElementById('input');
const answer = document.getElementById('answer');
const button = document.getElementById('button');
const again = document.getElementById('again');


let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber)

button.addEventListener('click', () => {

    let guess = input.value;
    if (typeof guess === 'string') {
        answer.innerText = 'Give me a number!';
    }

    guess = parseInt(input.value);

    if (randomNumber === guess) {
        answer.innerText = 'You got the number!'
        again.className = 'show';
    } else if (randomNumber > guess) {
        answer.innerText = 'My number is higher!'
    } else if (randomNumber < guess) {
        answer.innerText = 'My number is lower!'
    }
})

again.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 101);
    again.className = 'hidden';
    console.log(randomNumber);
    input.value = '';
});


const input = document.getElementById('input');
const answer = document.getElementById('answer');
const button = document.getElementById('button');
const again = document.getElementById('again');


let randomNumber = Math.floor(Math.random() * 101);
console.log('My secret number: ' + randomNumber)

button.addEventListener('click', () => {

    let guess = input.value;
    if (typeof guess === 'string') {
        answer.innerText = 'Give me a number!';
    }

    guess = parseInt(input.value);

    if (randomNumber === guess) {
        answer.innerText = 'Yes, my number was ' + guess + '!';
        again.className = 'show';
    } else if (randomNumber > guess) {
        answer.innerText = 'My number is higher than ' + guess + '.';
    } else if (randomNumber < guess) {
        answer.innerText = 'My number is lower than ' + + guess + '.';
    }
})

again.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 101);
    again.className = 'hidden';
    console.log('My secret number: ' + randomNumber)
    input.value = '';
});

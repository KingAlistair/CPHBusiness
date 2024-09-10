// Get the container element
const container = document.getElementById('number-list');

// Loop through numbers from 1 to 20
for (let index = 1; index < 21; index++) {
    const number = index;

    // Create a new div element for each number
    const div = document.createElement('div');
    div.innerText = number;

    // Check if the number is even or odd and apply the appropriate class
    if (number % 2 === 0) {
        div.classList.add('number', 'even');
    } else {
        div.classList.add('number', 'odd');
    }

    // Add an event listener to highlight the number when clicked
    div.addEventListener('click', () => {

        // Remove highlight from all numbers
        const allDivs = container.querySelectorAll('div');
        allDivs.forEach(div => div.classList.remove('highlight'));

        // Add highlight to the clicked number
        div.classList.add('highlight');
    });
    // Append the new div to the container
    container.appendChild(div);
};




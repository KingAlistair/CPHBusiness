

const box = document.getElementById('box');

box.addEventListener('click', function() {
    let backgroundColor = box.style.backgroundColor;

    if (backgroundColor === 'red'){
        box.style.backgroundColor = 'lightblue';
    } else {
        box.style.backgroundColor = 'red';
    }
});

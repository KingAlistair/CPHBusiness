const submitButton = document.getElementById('submitButton');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');

const errorContainer = document.getElementById('errorContainer');
const errorMessage = document.getElementById('errorMessage');

const showError = (message) => {
    errorContainer.className = 'errorContainer'; 
    errorContainer.style.display = 'block';
    errorMessage.textContent = message;
};

const showSuccess = (message) => {
    errorContainer.className = 'successContainer';
    errorContainer.style.display = 'block';
    errorMessage.textContent = message;
};

const clearErrors = () => {
    errorMessage.textContent = '';
    errorContainer.style.display = 'none';
};

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const usernameValue = username.value;
    const passwordValue = password.value;

    clearErrors();

    if (!emailValue || !usernameValue || !passwordValue) {
        showError('Fill out all the fields');
        return;
    }

    if (!emailValue.includes('@')) {
        showError('Invalid email address');
        return;
    }

    if (passwordValue.length < 7) {
        showError('Password needs to be at least 7 characters long');
        return;
    }

    if (!/\d/.test(passwordValue)) {
        showError('Password needs to contain at least one number');
        return;
    }

    if (!/[A-Z]/.test(passwordValue)) {
        showError('Password needs to contain at least one uppercase letter');
        return;
    }

    showSuccess('Success!');
});

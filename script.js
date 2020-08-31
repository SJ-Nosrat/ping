const form = document.querySelector(".form");
const email = document.querySelector("#email");

//clears form fields
const clearFields = () => email.value = '';

clearFields();

//event listener for a submit event
form.addEventListener('submit', e => {
    e.preventDefault();
    //runs the checkInputs() function for valid input
    checkInputs();
});

function checkInputs() {
    //gets the value and trims white spaces
    const emailValue = email.value.trim();

    if (emailValue === '') {
        addErrorMsg('Please provide a valid email address');
    } else if (!validEmail(emailValue)) {
        addErrorMsg('Looks like this is not an email');
    } else {
        removeErrorMsg();
    }

}

function addErrorMsg(message) {
    const errorMsg = document.querySelector('.error-msg');

    errorMsg.textContent = message;
    errorMsg.style.display = 'inline-block';

}

function removeErrorMsg() {
    const errorMsg = document.querySelector('.error-msg');

    errorMsg.style.display = 'none';
}

function validEmail(email) {
    // regex test function for valid email
    const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    return re.test(String(email).toLowerCase());
}
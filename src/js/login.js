/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    document.getElementById('login-email-error').style.display = "none";
    document.getElementById('login-password-error').style.display = "none";

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        note = "Please enter your Email."
        document.getElementById('login-email-error').innerText = note;
        document.getElementById('login-email-error').style.display = "block";

        hasError = true;
    } else {
        setInvalid(email);
        note = "Your Email address is invalid."
        document.getElementById('login-email-error').innerText = note;
        document.getElementById('login-email-error').style.display = "block";
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    if (password.value.trim().length == 0) {
        setInvalid(password);
        note = "Password is incorrect."
        document.getElementById('login-password-error').innerText = note;
        document.getElementById('login-password-error').style.display = "block";
        hasError = true;
    } else {
        setValid(password);
    }

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    document.getElementById('login-email-error').style.display = "none";
    document.getElementById('login-password-error').style.display = "none";

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        note = "Please enter your Email."
        document.getElementById('login-email-error').innerText = note;
        document.getElementById('login-email-error').style.display = "block";
        hasError = true;
    } else {
        setInvalid(email);
        note = "Your Email address is invalid."
        document.getElementById('login-email-error').innerText = note;
        document.getElementById('login-email-error').style.display = "block";
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    document.getElementById('register-first-name-error').style.display = "none";
    document.getElementById('register-last-name-error').style.display = "none";
    document.getElementById('register-email-error').style.display = "none";
    document.getElementById('register-password-error').style.display = "none";
    document.getElementById('register-programme-error').style.display = "none";


    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName);
        note = "Please enter your first name."
        document.getElementById('register-first-name-error').innerText = note;
        document.getElementById('register-first-name-error').style.display = "block";
        hasError = true;
    } else if (firstName.validity.valid) {
        setValid(firstName);
    }

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        note = "Please enter your last name."
        document.getElementById('register-last-name-error').innerText = note;
        document.getElementById('register-last-name-error').style.display = "block";
        hasError = true;
    } else if (lastName.validity.valid) {
        setValid(lastName);
    }

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        note = "Please enter your email."
        document.getElementById('register-email-error').innerText = note;
        document.getElementById('register-email-error').style.display = "block";
        hasError = true;
    } else {
        setInvalid(email);
        note = "Your email address is invalid."
        document.getElementById('register-email-error').innerText = note;
        document.getElementById('register-email-error').style.display = "block";
        hasError = true;
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        note = "Your password must be 8-16 characters long and contain both letters and numbers."
        document.getElementById('register-password-error').innerText = note;
        document.getElementById('register-password-error').style.display = "block";
        hasError = true;
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        note = "Your password must be 8-16 characters long and contain both letters and numbers."
        document.getElementById('register-password-error').innerText = note;
        document.getElementById('register-password-error').style.display = "block";
        hasError = true;
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        note = "Your password must be 8-16 characters long and contain both letters and numbers."
        document.getElementById('register-password-error').innerText = note;
        document.getElementById('register-password-error').style.display = "block";
        hasError = true;
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        note = "Your password must be 8-16 characters long and contain both letters and numbers."
        document.getElementById('register-password-error').innerText = note;
        document.getElementById('register-password-error').style.display = "block";
        hasError = true;
    } else {
        setValid(password);
    }

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        note = "Please choose the programme."
        document.getElementById('register-programme-error').innerText = note;
        document.getElementById('register-programme-error').style.display = "block";
        hasError = true;
    } else if (!programme.validity.valid) {
        setInvalid(programme);
        note = "Please choose one of the programme in the list."
        document.getElementById('register-programme-error').innerText = note;
        document.getElementById('register-programme-error').style.display = "block";
        hasError = true;
    } else {
        setValid(programme);
    }

    if (hasError) {
        document.getElementById('register-error').classList.remove('d-none');
    } else {
        document.getElementById('register-error').classList.add('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);

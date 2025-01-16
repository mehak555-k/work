// Get references to form and button elements
const form = document.getElementById('registration-form');
const registerButton = document.getElementById('register-button');

// Function to check if all form fields are filled
function checkFormCompletion() {
  const allFieldsFilled = Array.from(form.elements).every(input => input.value.trim() !== '');
  
  if (allFieldsFilled) {
    registerButton.style.pointerEvents = 'auto'; // Enable the button
    registerButton.style.cursor = 'pointer'; // Change cursor to pointer
  } else {
    registerButton.style.pointerEvents = 'none'; // Disable the button
    registerButton.style.cursor = 'not-allowed'; // Change cursor to not-allowed
  }
}

// Add event listeners to form fields to check completion on input
form.addEventListener('input', checkFormCompletion);

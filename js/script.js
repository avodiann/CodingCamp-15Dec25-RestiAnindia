/// Call welcomeMessage function to prompt user and display welcome message
welcomeMessage();

function welcomeMessage() {
    /// Prompt user for their name
    const userInput = prompt('Please enter your name:');

    /// Get the welcome-speech DOM element
    const welcomDOM = document.getElementById('welcome-speech');

    /// Check if userInput is null or empty
    if (userInput === null || userInput.trim() === '') {
        /// Render default welcome message
        welcomDOM.innerHTML = 'Welcome, Guest!';
    } else {
        /// Render personalized welcome message
        welcomDOM.innerHTML = 'Welcome To My Website, ' + userInput + '!';
    }
}

/// Placeholder for form validation function
function validateForm() { }

const form = document.getElementById("message-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  document.getElementById("showName").textContent = name;
  document.getElementById("showEmail").textContent = email;
  document.getElementById("showMessage").textContent = message;

  form.reset();
});


// Ensure this script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Login form functionality
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Replace these with your desired credentials
        const validUsername = 'sowmiya';
        const validPassword = '1103';

        if (username === validUsername && password === validPassword) {
            window.location.href = 'apology.html';
        } else {
            document.getElementById('errorMessage').textContent = 'Invalid username or password!';
        }
    });

    // Apology page functionality
    if (document.getElementById('revealLove')) {
        document.getElementById('revealLove').addEventListener('click', function() {
            var heart = document.getElementById('heart');
            heart.style.display = 'block';
        });
    }
});

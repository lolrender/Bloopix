// Select the logout link or button from the header
const logoutLink = document.querySelector('#logout');

// Add a click event listener
logoutLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior (if it's an anchor tag)

    // Perform cleanup actions like clearing session/local storage
    sessionStorage.clear(); // Clear session storage
    localStorage.removeItem('user'); // Remove user data from local storage if applicable

    // Redirect the user to the homepage
    window.location.href = 'index.html';
});
// Select the logout link
const logoutLink = document.querySelector('#logout');

// Add a click event listener
logoutLink.addEventListener('click', (event) => {
    event.preventDefault(); // Stop the link from navigating to a new page

    // Perform cleanup actions
    sessionStorage.clear(); // Clear session storage
    localStorage.removeItem('user'); // Clear any saved user data in local storage

    // Redirect to the homepage
    window.location.href = 'index.html';
});

// Connect to the server
const socket = io();

// Get references to the form and message input field
const form = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');

// Listen for the form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('chat message', message);  // Send message to server
    messageInput.value = '';  // Clear the input
});

// Listen for incoming chat messages and display them
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = msg;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;  // Scroll to bottom
});

const socket = new WebSocket('ws://localhost:5000'); // Change the URL if your server is hosted elsewhere

socket.onopen = () => {
    console.log('Connected to WebSocket server');
};

socket.onmessage = (event) => {
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.createElement('div');
    messageElement.innerText = event.data;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to bottom
};

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        socket.send(message);
        messageInput.value = '';
    }
});

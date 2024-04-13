
var socket = io();
var form = $('#form');
var input = $('#input');

form.submit(function (e) {
    e.preventDefault(); // prevents page reloading
    var messageInput = input.val();
    var username = localStorage.getItem('username'); // Retrieve username from localStorage
    socket.emit('chat message', { message: messageInput, username: username }); // Send message and username
    input.val('');
    return false;
});

socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg.username + ': ' + msg.message)); // Display username along with the message
});
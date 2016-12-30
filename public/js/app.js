var socket = io();

socket.on('connect', function () {
	console.log('Connected to Socket IO server');
})

socket.on('message', function (message) {
	console.log('New Message: ' + message.text);
})
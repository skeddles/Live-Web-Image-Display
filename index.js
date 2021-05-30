const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//config
const config = require("data-store")({ path: process.cwd() + '/config.json' });
if (!config.get('port')) config.set('port',3333);
if (!config.get('path')) config.set('path','./screenshot.png');
let portNumber = config.get('port');
let filePath = config.get('path');

//serve webpage
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	console.log("a user connected");

	sendLatestFile();

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(portNumber, () => {
	console.log("server started, watching "+filePath);

	//show address
	require('dns').lookup(require('os').hostname(), function (err, add, fam) {
		console.log('\n\n\tServer Address: \thttp://' + add + ':' + portNumber+ '\n\n ');
	});
});

//start watching the screenshot file
fs.watchFile(filePath, sendLatestFile);

function sendLatestFile () {
	fs.readFile(filePath, function(err, buf){

		let imgData = buf.toString('base64');
		io.emit('update', {image: imgData});

		console.log('latest screenshot sent');
	});
}

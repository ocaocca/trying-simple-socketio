const express = require('express');
const path = require('path')

const app = express();
const server = require('http').createServer(app)
const port = 3000
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname + '/public')))

io.on('connection', (socket) => {
  // chat => nama topic
  socket.on('CHAT_TOPIC', (message) => {
    //console.log("🚀 ~ file: index.js ~ line 14 ~ socket.on ~ message", message)

    io.emit('CHAT_TOPIC', message)
  })
})

server.listen(port, () => {
  console.log(`Server running on: ${port}`);
})
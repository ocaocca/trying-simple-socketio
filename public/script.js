const socket = io()

const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')
const chatWindow = document.querySelector('.chat-window')

chat.addEventListener('submit', event => {
  event.preventDefault()
  socket.emit('CHAT_TOPIC', Input.value);
  Input.value = ''
})

socket.on('CHAT_TOPIC', message => {
  console.log('kiriman balik dari socket.io ', message);
  const div = document.createElement('div')
  div.classList.add('render-message')
  div.innerText = message;
  chatWindow.appendChild(div)
})
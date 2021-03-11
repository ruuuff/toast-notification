const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]

const types = [
  'info',
  'success',
  'error',
]

button.addEventListener('click', () => createNotification())

// Se nenhum parametro for passado ao chamar esta 
// função, message e type terão valores nulos
function createNotification(message = null, type = null) {
  const notif = document.createElement('div')

  notif.classList.add('toast')
  // Se o valor de type retornar true, ele continua sendo ele mesmo,
  // se não, ele busca algum valor aleatório em getRandomType()
  notif.classList.add(type ? type : getRandomType())

  // Se o valor de message retornar true, ele continua sendo ele mesmo, 
  // se não, ele busca algum valor aleatório em getRandomMessage()
  notif.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
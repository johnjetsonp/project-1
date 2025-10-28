const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const msg = input.value.trim();
  if (!msg) return;

  // Create a new message element
  const li = document.createElement('li');
  li.textContent = msg;
  li.classList.add('message', 'me');
  messages.appendChild(li);

  // Scroll to bottom
  messages.scrollTop = messages.scrollHeight;

  // Clear input
  input.value = '';
});

const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

document.querySelector('#like-button')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const liked = button.classList.toggle('liked');
  button.textContent = liked ? '♥' : '♡';
  showToast(liked ? 'Thanks for the love!' : 'Like removed');
});

document.querySelector('#info-button')?.addEventListener('click', () => {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#hello-button')?.addEventListener('click', () => {
  showToast('Hello! Thanks for stopping by ✿');
});
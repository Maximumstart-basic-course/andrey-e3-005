const questionBtn = document.querySelector('.faq');

const answer = document.querySelectorAll('.answer');

questionBtn.addEventListener('click', (e) => {
  if (e.target.className === 'question') {
    e.target.nextElementSibling.classList.toggle('active');
  }
});


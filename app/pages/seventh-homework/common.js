const questionBtn = document.querySelector('.faq');


questionBtn.addEventListener('click', (e) => {
  if (e.target.className === 'question') {
    e.target.nextElementSibling.classList.toggle('active');
  }
});


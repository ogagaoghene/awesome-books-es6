/* eslint-disable */
export const contactBtn = document.querySelector('.contact-btn');

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.contact').style.display = 'flex';
  document.querySelector('.books').style.display = 'none';
  document.querySelector('.add-book').style.display = 'none';
});

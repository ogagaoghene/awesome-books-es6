/* eslint-disable */
export const bookAddBtn = document.querySelector('.add-btn');

bookAddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.add-book').style.display = 'block';
  document.querySelector('.books').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});
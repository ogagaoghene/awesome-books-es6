/* eslint-disable */
const listBtn = document.querySelector('.list-btn');

listBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.books').style.display = 'block';
  document.querySelector('.add-book').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});

export { listBtn };
'use strict';
const controls = document.querySelectorAll('[data-feature]');
controls.forEach(button => {
  button.addEventListener('click', () => {
    controls.forEach(control => {
      const selected = control === button;
      control.classList.toggle('active', selected);
      control.setAttribute('aria-pressed', String(selected));
      document.getElementById(`feature-${control.dataset.feature}`).hidden = !selected;
    });
  });
});

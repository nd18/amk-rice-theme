/**
 * Theme entry point — initializes components on DOMContentLoaded.
 */

const initNavigation = () => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });
};

const initCartCount = () => {
  const cartCountEl = document.querySelector('[data-cart-count]');
  if (!cartCountEl) return;

  fetch('/cart.js')
    .then((res) => res.json())
    .then((cart) => {
      cartCountEl.textContent = cart.item_count;
      cartCountEl.hidden = cart.item_count === 0;
    });
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCartCount();
});

const humberger = document.querySelector('.humberger');
const menu = document.querySelector('.menu');

humberger.addEventListener('click', function () {
  let src = humberger.src.includes('menu-light')
    ? './asset/images/x-close.svg'
    : './asset/images/menu-light.svg';
  humberger.src = src;

  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});

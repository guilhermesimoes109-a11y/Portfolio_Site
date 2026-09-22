const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

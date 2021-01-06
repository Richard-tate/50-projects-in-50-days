const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.querySelector('.container');


open.addEventListener('click', () => {
    
    nav.classList.add('show-nav');

    });

close.addEventListener('click', () => {
    
    nav.classList.remove('show-nav')
    
    });
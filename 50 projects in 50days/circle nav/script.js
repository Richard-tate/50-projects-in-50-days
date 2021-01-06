const nav = document.querySelector('.circle');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
const list = document.querySelector('.list');


btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
    if(icon.classList.contains('fa-bars')){
       setTimeout(() => {
           icon.classList.remove('fa-bars');
           icon.classList.add('fa-times');
       }, 4000);
        
    }else if(icon.classList.contains('fa-times')){
        setTimeout(() => {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        }, 3000);
    }

    setTimeout( () => {
        list.classList.toggle('show');
    },3300);

    const inner = document.createElement('span');
    inner.classList.add('ripple');
    setTimeout(() =>{
        nav.appendChild(inner);
    }, 500);
    
    setTimeout(() =>{
        nav.removeChild(inner);
    }, 3000);
    
});

    
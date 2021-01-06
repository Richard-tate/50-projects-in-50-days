const toggle = document.getElementById('open');
const nav = document.getElementById('nav');
 const circle = document.querySelector('.circle');
   const closeBtn = document.querySelector('#close');
            
            toggle.addEventListener('click', () =>{
                nav.classList.add('active');
                circle.classList.add('show');
            });
            closeBtn.addEventListener('click', ()=>{
        circle.classList.remove('show');
        nav.classList.remove('active');
       
    })
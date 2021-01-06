const btns = document.querySelectorAll('.faq-toggle');
const faq = document.querySelectorAll('.faq');

btns.forEach(btn => {
btn.addEventListener('click', () =>{
    btn.parentNode.classList.toggle('active');
});
});
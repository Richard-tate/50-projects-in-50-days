const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
let t;
const text = "Hello World!";
let idx = 1;
let speed = 300 / speedEl.value;


startBtn.addEventListener('click', ()=>{
   writeText();
});

stopBtn.addEventListener('click', () =>{
    stopText();
});

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if(idx > text.length){
        idx = 1;
    }

   t = setTimeout(writeText, speed);
}

function stopText(){
 clearTimeout(t);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);
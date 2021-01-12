const word = document.querySelector('#word');
const text = document.querySelector('#text');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const endGameEl = document.querySelector('#end-game-container');
const settingsBtn = document.querySelector('#settings-btn');
const settings = document.querySelector('#settings');
const settingsForm = document.querySelector('#settings-form');
const difficultltySelect = document.querySelector('#difficultlty');


const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'siliver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

let randomWord;

let score = 0;

let time = 10;
let difficultlty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

difficultltySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

text.focus();

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function addWord(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}
addWord();

function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}

const timeInterval = setInterval(updateTime, 1000);

function updateTime(){
    time-- ;
    timeEl.innerHTML = time +'s';
    if(time === 0 ){
        clearInterval(timeInterval);
        gameOver();
    }
}


function gameOver(){
    endGameEl.innerHTML = `
        <h1>Time has run out</h1>
        <p>Your final score is: ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;
    endGameEl.style.display = 'flex';
}


text.addEventListener('input', e =>{
    const insertedText = e.target.value;

    if(insertedText === randomWord){
        addWord();
        updateScore();

        e.target.value = '';

      if(difficultlty === 'hard'){
          time += 3;
      }
      else if(difficultlty === 'medium'){
          time += 4;
      }
      else{
          time += 6;
      }
        updateTime();
    }
});

settingsBtn.addEventListener('click', () =>{
    settings.classList.toggle('hide');
});

settingsForm.addEventListener('change', e =>{
    difficultlty = e.target.value;
    localStorage.setItem('difficulty', difficultlty);
});

// check Connectivity

// alert("Fellow")

// " RE-MODEFING THE ORIGINAL - NEW "  // 


// FIRST : Create a object for both of the players....


// p1 OBJECT:
const p1 = {
  Score: 0,
  Button: document.querySelector('#p1Button'),
  Display: document.querySelector('#p1Display')
}

const p2 = {
  Score: 0,
  Button: document.querySelector('#p2Button'),
  Display: document.querySelector('#p2Display') // TO THE LIVE SCORE IN THE BOARD..
}

const resetBtn = document.querySelector('#reset')
const ScoreSlt = document.querySelector('#playTO')

let isWinngScore = 3;  // SATARING PLAYING SCORE..
let isGameOver = false;  // HALT THE THE GAME IF THE GAME REACH IT'S MAX SCORE..


// Create a function that UPDATE both palyer vlaues .. //

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.Score += 1;
    if (isWinngScore === player.Score) {
      isGameOver = true;
      player.Display.classList.add('has-text-success')
      opponent.Display.classList.add('has-text-danger')
      player.Button.disabled = true
      opponent.Button.disabled = true
    }
    player.Display.textContent = player.Score;
  }
}




// Passing the Object inside the function...
p1.Button.addEventListener('click', function () {
  // this code will prevent to increase beyond the winning Score.
  updateScore(p1, p2);

})


// for P2 ///
p2.Button.addEventListener('click', function () {
  // this code will prevent to increase beyond the winning Score.
  updateScore(p2, p1);

})

ScoreSlt.addEventListener('change', function () {
  // cahnge the string into the integer...
  isWinngScore = parseInt(this.value);
  reset();

})

// reset the game..
resetBtn.addEventListener('click', reset);

function reset() {
  // we can add loop here to make every player have the same properties at the same time..
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.Score = 0;
    p.Display.textContent = 0;
    p.Display.classList.remove('has-text-success', 'has-text-danger')
    p.Button.disabled = false
  }
}
//   isGameOver = false;
//   p1.Score = 0;
//   p2.Score = 0;
//   p1.Display.textContent = 0;
//   p2.Display.textContent = 0;
//   p1.Display.classList.remove('has-text-success', 'has-text-denger')
//   p2.Display.classList.remove('has-text-success', 'has-text-denger')
//   p1.Button.disabled = false
//   p2.Button.disabled = false
// }



// for the select the Score to start the game;


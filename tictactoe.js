let player = 'X';
let turn = 1;
let result = document.getElementById('result');
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function renderBoard () {
  let id = 1;
  for(const row of gameBoard){
    for(const val of row){
      document.getElementById(`${id}`).innerText = val;
      id++;
    }
  }
}

function clearBoard () {
  playReset();
  gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  result.innerText = '';
  renderBoard ();
}

function isWinner () {
  for (let i in gameBoard){
    if(gameBoard[i].toString() === `${player},${player},${player}`) return true;
  }
  if(gameBoard[0][0] === player && gameBoard[1][0] === player && gameBoard[2][0] === player) return true;
  if(gameBoard[0][1] === player && gameBoard[1][1] === player && gameBoard[2][1] === player) return true;
  if(gameBoard[0][2] === player && gameBoard[1][2] === player && gameBoard[2][2] === player) return true;
  if(gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player) return true;
  if(gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player) return true;
}

function isPositionTakken (x, y) {
  return gameBoard[x][y] === 'X' || gameBoard[x][y] === 'O';
}

function isDraw () {
  let emptyCels = 0;
  for(let i = 0; i < gameBoard.length; i++){
    for(let j = 0; j < gameBoard[i].length; j++){
      if(gameBoard[i][j] === ''){
        emptyCels++;
      }
    }
  }
  if(emptyCels === 0) result.innerText = 'Draw!';
}

function playGame(x, y){
  playClick();
  if(!isPositionTakken (x, y)){
    if(turn % 2 === 0){
      player = 'O';
    }
    else{
      player = 'X';
    }
    gameBoard[x][y] = player;
    if(isWinner()){
      result.innerText = `Congratulations, ${player} Win!!!`;
      playApplause();
    }
    isDraw();
    renderBoard();
    turn++;
  }
}

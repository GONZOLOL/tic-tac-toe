let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let statusEl = document.getElementById('status');
let squares = document.querySelectorAll('.square');
let resetButton = document.getElementById('reset');

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  statusEl.textContent = `Turno del jugador ${currentPlayer}`;
  squares.forEach(square => square.textContent = '');
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every(square => square)) {
    return 'tie';
  }

  return null;
}

function handleClick(event) {
  const square = event.target;
  const index = parseInt(square.id);

  if (board[index] || checkWin()) {
    return;
  }

  board[index] = currentPlayer;
  square.textContent = currentPlayer;

  const winner = checkWin();
  if (winner) {
    statusEl.textContent = `Ganó el jugador ${winner}!`;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusEl.textContent = `Turno del jugador ${currentPlayer}`;
  }
}

squares.forEach(square => square.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);

resetGame();

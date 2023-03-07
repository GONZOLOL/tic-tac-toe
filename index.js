let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';
let estado = document.getElementById('estado');
let cuadrados = document.querySelectorAll('.cuadrado');
let resetButton = document.getElementById('reset');


function checkWin() {
  const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < combinaciones.length; i++) {
    const [a, b, c] = combinaciones[i];
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return tablero[a];
    }
  }

  if (tablero.every(cuadrado => cuadrado)) {
    return 'empatados';
  }
  return null;
}

function handleClick(event) {
  const cuadrado = event.target;
  const index = parseInt(cuadrado.id);

  if (tablero[index] || checkWin()) {
    return;
  }

  tablero[index] = jugadorActual;
  cuadrado.textContent = jugadorActual;

  const winner = checkWin();
  if (winner) {
    estado.textContent = `Ganó el jugador ${winner}!`;
  } else {
    jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    estado.textContent = `Turno del jugador ${jugadorActual}`;
  }
}

function resetGame() {
  tablero = ['', '', '', '', '', '', '', '', ''];
  jugadorActual = 'X';
  estado.textContent = `Turno del jugador ${jugadorActual}`;
  cuadrados.forEach(cuadrados => cuadrados.textContent = '');
}
cuadrados.forEach(cuadrado => cuadrado.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);

resetGame();

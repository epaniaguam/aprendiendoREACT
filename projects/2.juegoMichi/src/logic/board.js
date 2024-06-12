import { WINNING_COMBINATIONS } from './constants.js';

export function checkWinner(board) {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination; // obtenemos la combinación
    if (board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

export function checkEndGame(board) {
  // Determinamos empate si ninguna casilla es nula
  return board.every((square) => square !== null);
}
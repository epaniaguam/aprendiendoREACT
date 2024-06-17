import { useState } from "react";
import { Square } from "./components/Square";
import "./App.css";
import { WinnerModal } from "./components/WinnerModal";
import { checkEndGame, checkWinner } from "./logic/board";
import { TURNS } from "./logic/constants";
import { removeFromLocalStorage, saveinLocalStorage } from "./logic/storage";

function App() {
  // Estados board, turn winner
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem("board");
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn");
    return turnFromLocalStorage ? turnFromLocalStorage : TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    // Si ya hay un valor en la casilla, no hagas nada. Es decir, la casilla ya fue tomada
    if (board[index]) return;
    // Si ya hay un ganador, no hagas nada
    if (winner != null) return;

    // De lo contrario, actualiza el tablero y el turno
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar en localStorage
    saveinLocalStorage(newBoard, newTurn);

    // Verificar si hay un ganador o empate
    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
      return; // si hay un ganador no cambia el turno
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // false es empate
      return;
    }
  };

  function reiniciar() {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    // Borrar localStorage
    removeFromLocalStorage();
  }

  return (
    <main className="board">
      <h1>JUGUEMOS MICHI</h1>
      <button onClick={reiniciar}>REINICIAR</button>
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} reiniciar={reiniciar} />
    </main>
  );
}

export default App;

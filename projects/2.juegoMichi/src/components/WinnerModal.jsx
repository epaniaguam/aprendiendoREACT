import { Square } from "./Square";

export function WinnerModal({ winner, reiniciar }) {
  // console.log("WinnerModal", winner);
  if (winner !== null) {
    const winnerText = winner === false ? "Empate:" : "Ganador:";
    // console.log("El ganador: " + winnerText);
    return (
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>
          {winner && (
            <header className="win">
              <Square> {winner} </Square>
            </header>
          )}
          <button onClick={reiniciar}>REINICIAR</button>
        </div>
      </section>
    );
  }

  return null;
}

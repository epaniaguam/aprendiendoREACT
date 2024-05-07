import { useState } from 'react'
import './App.css'

const TURNS = {
  X: '⚠️',
  O: '✅',
}

const WINNING_COMBINATIONS = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
]

function checkWinner(board) {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination // obtenemos la combinación
    if (board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  return null
}

function checkEndGame(board) {
  // Determinamos empate si ninguna casilla es nula
  return board.every((square) => square !== null)
}

function Square({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  // console.log('Select', isSelected, ' > ', index)
  console.log('children', children)
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


function App() {

  // Estados board, turn

  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // Si ya hay un valor en la casilla, no hagas nada. Es decir, la casilla ya fue tomada
    if (board[index]) return
    // Si ya hay un ganador, no hagas nada
    if (winner != null) return

    // De lo contrario, actualiza el tablero y el turno 
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Verificar si hay un ganador o empate
    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      setWinner(newWinner)
      return // si hay un ganador no cambia el turno
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // false es empate
      return
    }

    // Cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // console.log('index', index)
    setTurn(newTurn)

  }



  function reiniciar() {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>JUGUEMOS MICHI</h1>
      <button onClick={reiniciar}>
        REINICIAR
      </button>
      <section className='game'>
        {
          board.map((_, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          ))
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {winner ? `Ganador:` : 'Empate'}
              </h2>
              {
                winner && (
                  <header className='win'>
                    <Square> {winner} </Square>
                  </header>
                )
              }
              <button onClick={reiniciar}>
                REINICIAR
              </button>
            </div>

          </section>

        )
      }

      <h1>{winner ? (winner != 'Empate' ? `Ganador: ${winner}` : 'Empate') : ''}</h1>

    </main>
  )
}

export default App

import { useState } from "react";
import '../App.css'


function App() {

  const [winner, setWinner] = useState('')
  const [turn, setTurn] = useState('x')
  const [cells, setCells] = useState(Array(9).fill(''))
  const Cell = ({ num }) => {
    return (
      <td className="border-gray-500 border-2 w-[100px] h-[100px] font-bold text-blue-700 text-2xl px-10" onClick={() => handleOnclick(num)}> {cells[num]} </td>
    );
  }

  const checkforWinner = (squares) => {
    let combos = {
      acroos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6]
      ]
    }

    for (let combo in combos) {
      combos[combo].forEach(pattern => {
        if (squares[pattern[0]] == '' || squares[pattern[1]] == '' || squares[pattern[2]] == '') {
          //do nothing
        } else {
          if (squares[pattern[0]] == squares[pattern[1]] && squares[pattern[1]] == squares[pattern[2]]) {
            setWinner(squares[pattern[0]])
            console.log('winner is ' + squares[pattern[0]]);
          }
        }
      });
    }
  }

  const handleRestart = () => {
    setCells(Array(9).fill(''))
    setWinner('')
    setTurn('x')

  }

  const handleOnclick = (num) => {
    if (cells[num] != '') {
      alert("Already clicked")
      return
    }
    if (winner != '') {
      return
    }
    let squares = { ...cells }
    if (turn == "x") {
      squares[num] = 'x'
      setTurn("o")
    }
    else {
      squares[num] = 'o'
      setTurn("x")
    }
    setCells(squares)
    checkforWinner(squares)

  }
  return (
    <><div className="container">
      <table className="container">
        Turn: {turn}
        <tbody >
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />

          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />

          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />

          </tr>

        </tbody>

      </table>

    </div>
      <div className="container">
        {winner && (
          <>
            <div className="text-green-500 font-bold text-xl mt-4 mb-2"> Winner is "{winner}"</div>
            <button className="bg-slate-600 border-4 border-black text-white px-2 py-1 rounded-md"
              onClick={() => handleRestart()}
            >Play again</button>
          </>
        )}
      </div></>

  );
}

export default App;

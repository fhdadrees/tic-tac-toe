import Board from "./components/Board";
import "./App.css";
import { useState } from "react";
import Players from "./components/Players";
import NewGame from "./components/NewGame";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXplaying] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameover] = useState(false);
  const [whoWon, setWhoWon] = useState("");

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const playerXTurn = () => {
    if (!(board.includes("X") || board.includes("O"))) {
      setXplaying(true);
    }
  };
  const playerYTurn = () => {
    if (!(board.includes("X") || board.includes("O")) && xPlaying) {
      setXplaying(false);
    }
  };

  const handleClick = (idx) => {
    const updateBoard = board.map((value, index) => {
      if (index === idx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updateBoard);
    setXplaying(!xPlaying);
    const winner = checkWinnver(updateBoard);
    winner === "O" || winner ==="X" ? setWhoWon(winner) : setWhoWon("Draw")

    if (winner) {
      if (winner === "O") {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      } else if (winner === "X") {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      }
    }
  };

  const checkWinnver = (board) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameover(true);

        return board[x];
      } else if (!(board[x] && board[x] === board[y] && board[y] === board[z])) {

        let filteredArray = board.filter((val) => {
          return val === null
        });
        if(filteredArray.length === 0) {
          setWhoWon("Draw")
          setGameover(true);
          return "Draw"
        }
      }
    }
  };

  const newGame = () => {
    setBoard(Array(9).fill(null));
    setGameover(false);
    setXplaying(true);
  };

  return (
    <div className="flex justify-evenly flex-col items-center h-screen w-full min-h-[45rem] max-h-[70rem]">
      <Players
        score={score}
        xPlaying={xPlaying}
        playerXTurn={playerXTurn}
        playerYTurn={playerYTurn}
        board={board}
        gameOver={gameOver}
      />
      <Board
        value="X"
        board={board}
        onClick={handleClick}
        gameOver={gameOver}
        whoWon={whoWon}
      />
      <NewGame newGame={newGame} />
    </div>
  );
}

export default App;

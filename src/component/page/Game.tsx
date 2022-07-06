import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GameStore } from "../../redux/duck/game";
import Square from "../common/square";
import Title from "../common/title";

const SizeBoard = {
  basic: 9,
  advanced: 16
};

const createBoard = (size: number) => {
  const board = new Array(size).fill([]);
  return board.map((row: string[]) => row = new Array(size).fill(''));
}

const renderBoard = (board: [][]) => board.map((row: [], index: number) => {
  const squares = row.map((item: any, index: number) => <Square key={`squares-${index}`} value={'0'} onClick={() => console.log("mines")} />);
  return (<div key={`row-${index}`} className="board-row">{squares}</div>);
})

const Game = () => {
  const gameStore = useSelector((state: GameStore) => state.game)
  const [mines, setMines] = useState([]);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const size = gameStore.level === "basic" ? SizeBoard.basic : SizeBoard.advanced
    const newBoard = createBoard(size) as [];
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    if (board.length) {
      console.log(board[2][3]);
    }
  }, [board])

  return (
    <>
      <Title title="Game page" />
      <p>{gameStore.level}</p>
      <div>
        <>
          {renderBoard(board)}
        </>
      </div>
    </>
  );
};

export default Game;

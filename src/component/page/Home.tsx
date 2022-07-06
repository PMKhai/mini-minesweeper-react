import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setLevel } from '../../redux/duck/game';
import { path } from '../../routes/path';
import Button from '../common/button';
import Title from '../common/title';

const Home = (): ReactElement => {
  const dispatch = useDispatch();
  const setGameLevel = (level: string) => dispatch(setLevel(level))
  const navigate = useNavigate();
  const startGame = (level: string): void => {
    setGameLevel(level)
    navigate(path.gamePage)
  }

  return (
    <>
      <Title title="Welcome to Mini Minesweeper" />
      <Button onClick={() => startGame("basic")} text="Basic" />
      <Button onClick={() => startGame("advanced")} text="Advanced" />
    </>
  )
};

export default Home;

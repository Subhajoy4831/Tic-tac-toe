import React,{useState} from 'react';
import './App.css';
import {Board} from './components/Board'
import { ScoreBoard } from './components/ScoreBoard';
import { ResetBoardButton } from './components/ResetBoardButton';
import { ResetScoreButton } from './components/ResetScoreButton';

function App() {

  const WIN_COND = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]

  const [board,setBoard] = useState(Array(9).fill(null));
  const [xPlaying,setxPlaying] = useState(true);
  const [scores,setScores] = useState( {xScore: 0, oScore: 0});
  const [gameOver,setGameOver] = useState(false);

  const handleBoxClick = (boxIdx) =>{
    const updatedBoard = board.map((value,idx) =>{
      if(idx === boxIdx){
        return xPlaying === true? "X":"O";
      }
      else{
        return value;
      }
    })

    const winner = checkWinner(updatedBoard);
    if(winner){
      if(winner==="O"){
        let {oScore} = scores;
        oScore+=1;
        setScores({...scores,oScore});
      }
      else{
        let {xScore} = scores;
        xScore+=1;
        setScores({...scores,xScore});
      }
    }


    setBoard(updatedBoard);
    setxPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for(let i=0;i<WIN_COND.length;i++){
      const[x,y,z] = WIN_COND[i];

      if(board[x] && board[x]===board[y] && board[x]===board[z]){
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setxPlaying(true);
  }

  const resetScore = () => {
    // resetBoard();
    setScores({xScore:0,oScore:0});
  }
  
  return (
    <div className="App">
      <h1 className='heading'>TIC-TAC-TOE</h1>
      <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board = {board} onClick = {gameOver?resetBoard: handleBoxClick}/>
      <ResetBoardButton resetBoard={resetBoard}/>
      <ResetScoreButton resetScore={resetScore}/>
    </div>
  );
}

export default App;

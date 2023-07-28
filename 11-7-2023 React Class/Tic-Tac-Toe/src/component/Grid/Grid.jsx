import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../../helper/checkWinner";
import "./Grid.css"

function Grid({numberOfGrid}){
    const [board,setBoard]=useState(Array(numberOfGrid).fill(""));
    const [turn,setTurn]=useState(true);
    const [winner,setWinner]=useState(null);

    function play(index){
        if(turn==true){
            board[index]="O";
        }else{
            board[index]="X";
        }

        const win=isWinner(board, turn ? "O": "X");
        if(win){
            setWinner(win);
        }

        setBoard([...board]);
        setTurn(!turn);
    }
    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfGrid).fill(""))
    }
    return (
        <div className="grid-wripper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                        <button className="rest" onClick={reset}>Reset Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">Current turn:{(turn)?"O":"X"}</h1>
            <div className="grid">
                {board.map((el,idx)=><Card key={idx} onPlay={play} player={el} index={idx}/>)}
            </div>
        </div>
    )
}

export default Grid;
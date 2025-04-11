import { useState } from "react";

const initialGameBord = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBord({onSelectSqr, activePlayerSymbl}) {
  const [gameBord, setGameBord] = useState(initialGameBord);

  function handleClickBtn(rowIndx, colIndex){
    setGameBord((prevGameBord)=>{
      const updateGameBord = [...prevGameBord.map((innerArr)=>[...innerArr])];
      updateGameBord[rowIndx][colIndex] = activePlayerSymbl;
      return updateGameBord;
    })
    onSelectSqr();
  } 

  return (
    <ol id="game-board">
      {gameBord.map((raw, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {raw.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleClickBtn(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

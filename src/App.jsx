
import { useState } from "react";
import GameBord from "./components/GameBord";
import Player from "./components/Player";

function App() {

  const [activePlayer,setActivePlayer] = useState('X');

  function handleSelecrSqure(){
      setActivePlayer((currentActivePlayer)=>currentActivePlayer==="X" ? "O" : "X");

  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 01" symbol="X" isActive={activePlayer==="X"} />
          <Player initialName="Player 02" symbol="O" isActive={activePlayer==="O"}/>
        </ol>
        <GameBord onSelectSqr={handleSelecrSqure} activePlayerSymbl={activePlayer}/>
      </div>
       log
    </main>
  );
}

export default App;

import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 01" symbol="X" />
          <Player initialName="Player 02" symbol="O" />
        </ol>
        GAAME BORD
      </div>
      LOG
    </main>
  );
}

export default App;

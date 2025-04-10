import { useState } from "react";

export default function ({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editPlayer() {
    setIsEditing((currentEditing) => !currentEditing);
  }
  function changehandle(events) {
    setPlayerName(events.target.value);
  }

  let playerNameDisplay = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameDisplay = (
      <input type="text" required value={playerName} onChange={changehandle} />
    );
  }
  return (
    <li>
      <span className="player">
        {playerNameDisplay}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={editPlayer}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}

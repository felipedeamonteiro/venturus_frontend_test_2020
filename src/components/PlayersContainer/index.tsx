import React, { useEffect, useState } from 'react';
import { usePlayer } from '../../hooks/players';

import { Container } from './styles';

interface PlayerInfo {
  id: number;
  name: string;
  age: number;
  nationality: string;
  position: string;
  team: string;
}

interface PlayerContainer {
  playersDataOutsideField: PlayerInfo[];
}

const PlayersContainer: React.FC<PlayerContainer> = ({
  playersDataOutsideField,
}) => {
  const {
    handleDragStart,
    playerWasPutInField,
    playerInfoPutInField,
    setPlayerWasPutInField,
  } = usePlayer();
  const [playersData, setPlayersData] = useState<PlayerInfo[]>([]);

  useEffect(() => {
    setPlayersData(playersDataOutsideField);
  }, [playersDataOutsideField]);

  useEffect(() => {
    if (playerWasPutInField) {
      const filteredPlayers = playersData.filter(playerData => {
        return playerData.id !== playerInfoPutInField.id;
      });
      setPlayersData(filteredPlayers);
      setPlayerWasPutInField(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerWasPutInField]);

  return (
    <>
      <p style={{ marginTop: 6, color: '#70008c', fontWeight: 600 }}>
        {playersData.length}
        -player
        {playersData.length > 1 || playersData.length === 0 ? 's' : ''}
      </p>
      <Container>
        {playersData.map((playerData, index) => (
          <div
            key={index}
            className="players-container"
            draggable
            onDragStart={e => handleDragStart(e, playerData)}
          >
            <div className="pc-upper-info">
              <div className="player-name">
                <h4>Name: </h4>
                <p title={playerData.name}>{playerData.name}</p>
              </div>
              <div className="player-age">
                <h4>Age: </h4>
                <p>{playerData.age}</p>
              </div>
            </div>
            <div className="pc-bottom-info">
              <div className="player-nationality">
                <h4>Nationality: </h4>
                <p title={playerData.nationality}>{playerData.nationality}</p>
              </div>
              <div className="player-position">
                <h4>Position: </h4>
                <p title={playerData.position}>{playerData.position}</p>
              </div>
            </div>
            <div className="pc-team-info">
              <div className="player-team">
                <h4>Team: </h4>
                <p title={playerData.team}>{playerData.team}</p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default PlayersContainer;

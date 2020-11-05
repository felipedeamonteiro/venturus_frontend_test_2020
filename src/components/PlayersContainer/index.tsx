import React from 'react';
import { usePlayer } from '../../hooks/players';

import { Container } from './styles';

interface PlayerInfo {
  name: string;
  age: number;
  nationality: string;
  position: string;
}

interface PlayerContainer {
  data: PlayerInfo[];
}

const PlayersContainer: React.FC<PlayerContainer> = ({ data }) => {
  const { handleDragStart } = usePlayer();

  return (
    <>
      <Container>
        {data.map((playerInfo, index) => (
          <div
            key={index}
            className="players-container"
            draggable
            onDragStart={e => handleDragStart(e, playerInfo.name)}
          >
            <div className="pc-upper-info">
              <div className="player-name">
                <h4>Name: </h4>
                <p title={playerInfo.name}>{playerInfo.name}</p>
              </div>
              <div className="player-age">
                <h4>Age: </h4>
                <p>{playerInfo.age}</p>
              </div>
            </div>
            <div className="pc-bottom-info">
              <div className="player-nationality">
                <h4>Nationality: </h4>
                <p>{playerInfo.nationality}</p>
              </div>
              <div className="player-position">
                <h4>Position: </h4>
                <p>{playerInfo.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Container>
      <p style={{ marginTop: 6, color: '#70008c', fontWeight: 600 }}>
        {data.length}
        -player
        {data.length > 1 || data.length === 0 ? 's' : ''}
      </p>
    </>
  );
};

export default PlayersContainer;

import React from 'react';

import { Container } from './styles';

interface PlayerInfo {
  name: string;
  age: number;
  nationality: string;
}

interface PlayerContainer {
  data: PlayerInfo[];
}

const PlayersContainer: React.FC<PlayerContainer> = ({ data }) => (
  <Container>
    {data.map((playerInfo, index) => (
      <div key={index} className="players-container">
        <div className="pc-upper-info">
          <div className="player-name">
            <h4>Name: </h4>
            <p>{playerInfo.name}</p>
          </div>
          <div className="player-age">
            <h4>Age: </h4>
            <p>{playerInfo.age}</p>
          </div>
        </div>
        <div className="pc-bottom-info">
          <h4>Nationality: </h4>
          <p>{playerInfo.nationality}</p>
        </div>
      </div>
    ))}
  </Container>
);

export default PlayersContainer;

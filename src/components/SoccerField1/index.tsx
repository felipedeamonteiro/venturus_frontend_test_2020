import React from 'react';

import { Container } from './styles';

const SoccerField1: React.FC = () => {
  return (
    <Container>
      <div className="central-line" />
      <div className="central-circle" />
      <div className="players-container">
        <div className="player-mpp">
          <h3 className="mpph3-letters">Most Picked Player</h3>
          <h3 className="mpph3-numbers">75%</h3>
          <div className="mpp-border">
            <div className="most-picked-player">MP</div>
          </div>
        </div>
        <div className="player-lpp">
          <h3 className="lpph3-letters">Less Picked Player</h3>
          <h3 className="lpph3-numbers">25%</h3>
          <div className="lpp-border">
            <div className="less-picked-player">LP</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SoccerField1;

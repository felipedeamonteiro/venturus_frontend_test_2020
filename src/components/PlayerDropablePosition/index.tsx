import React from 'react';

import { GoPlus } from 'react-icons/go';
import { Container } from './styles';

interface PositionProps {
  positionNumber: number;
}

const PlayerDropablePosition: React.FC<PositionProps> = ({
  positionNumber,
}) => (
  <Container positionNumber={positionNumber}>
    <div className="player-position">
      <div className="player-position-center">
        <GoPlus size={20} />
      </div>
    </div>
  </Container>
);

export default PlayerDropablePosition;

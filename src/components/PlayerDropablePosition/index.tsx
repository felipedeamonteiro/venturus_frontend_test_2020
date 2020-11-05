import React from 'react';

import { GoPlus } from 'react-icons/go';
import { Container } from './styles';

import { usePlayer } from '../../hooks/players';

interface PositionProps {
  positionNumber: number;
}

const PlayerDropablePosition: React.FC<PositionProps> = ({
  positionNumber,
}) => {
  const { handleDragOver, handleDrop } = usePlayer();

  return (
    <Container positionNumber={positionNumber}>
      <div
        className="player-position"
        onDragOver={e => handleDragOver(e, positionNumber)}
        onDrop={e => handleDrop(e, 'dropou')}
      >
        <div className="player-position-center">
          <GoPlus size={20} />
        </div>
      </div>
    </Container>
  );
};

export default PlayerDropablePosition;

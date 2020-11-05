import React, { useEffect, useState } from 'react';

import { GoPlus } from 'react-icons/go';
import { Container } from './styles';

import { usePlayer } from '../../hooks/players';

interface PositionProps {
  positionNumber: number;
}

const PlayerDropablePosition: React.FC<PositionProps> = ({
  positionNumber,
}) => {
  const [hasPlayer, setHasPlayer] = useState<boolean>(false);
  const [nameInitials, setNameInitials] = useState<string>('');
  const { handleDragOver, handleDrop, teamPlayersPosition } = usePlayer();

  useEffect(() => {
    teamPlayersPosition.forEach(player => {
      if (player.position === positionNumber) {
        console.log('player data', player);
        const [firstName, secondName] = player.player.name.split(' ');
        setNameInitials(firstName[0] + secondName[0].toUpperCase());
        setHasPlayer(true);
      }
    });
  }, [positionNumber, teamPlayersPosition]);

  // [x] - Pegar as iniciais do nome do jogador;
  // [] - Montar a caixinha com o hover e informações dele;

  return (
    <Container positionNumber={positionNumber} hasPlayer={hasPlayer}>
      {!hasPlayer ? (
        <div
          className="player-position"
          onDragOver={e => handleDragOver(e, positionNumber)}
          onDrop={e => handleDrop(e, positionNumber, 'dropou')}
        >
          <div className="player-position-center">
            <GoPlus size={20} />
          </div>
        </div>
      ) : (
        <div
          className="player-position"
          onDragOver={e => handleDragOver(e, positionNumber)}
          onDrop={e => handleDrop(e, positionNumber, 'dropou')}
        >
          <div className="player-position-center">
            <p>{nameInitials}</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default PlayerDropablePosition;

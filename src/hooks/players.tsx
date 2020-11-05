import React, { createContext, useContext, useCallback, useState } from 'react';

interface Player {
  id: number;
  name: string;
  age: number;
  nationality: string;
  position: string;
}

interface TeamPlayersPosition {
  position: number;
  player: Player;
}

interface PlayersContextData {
  player: Player[];
  teamPlayersPosition: TeamPlayersPosition[];
  handleDragStart(e: any, playerInfo: Player): void;
  handleDragOver(e: any, positionNumber: number): void;
  handleDrop(e: any, positionNumber: number, category: any): void;
}

const PlayerContext = createContext<PlayersContextData>(
  {} as PlayersContextData,
);

export const PlayerProvider: React.FC = ({ children }) => {
  const [playersInfo, setPlayersInfo] = useState<Player[]>([]);
  const [teamPlayersPosition, setTeamPlayersPosition] = useState<
    TeamPlayersPosition[]
  >([]);

  const handleDragStart = useCallback((e, playerInfo) => {
    console.log('onDragStart');
    console.log('dragstart', playerInfo);
    const playerInfoData = e.dataTransfer.setData(
      'playerInfo',
      JSON.stringify(playerInfo),
    );
    console.log('DragStart playerInfoData', playerInfoData);
  }, []);

  const handleDragOver = useCallback((e, positionNumber) => {
    e.preventDefault();
    console.log('onDragOver position', positionNumber);
  }, []);

  const handleDrop = useCallback(
    (e, positionNumber, category) => {
      console.log('category drop', category);
      const playerInfoMonster = e.dataTransfer.getData('playerInfo');
      const parsedPlayerInfo = JSON.parse(playerInfoMonster);
      setPlayersInfo([...playersInfo, parsedPlayerInfo]);
      console.log('no drop playerInfo', playerInfoMonster);
      const playerCompleteInfo: TeamPlayersPosition = {
        position: positionNumber,
        player: JSON.parse(playerInfoMonster),
      };
      console.log('drop playerCompleteInfo', playerCompleteInfo);
      setTeamPlayersPosition([...teamPlayersPosition, playerCompleteInfo]);
    },
    [teamPlayersPosition, playersInfo],
  );

  return (
    <PlayerContext.Provider
      value={{
        player: playersInfo,
        handleDragStart,
        handleDragOver,
        handleDrop,
        teamPlayersPosition,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export function usePlayer(): PlayersContextData {
  const context = useContext(PlayerContext);

  return context;
}

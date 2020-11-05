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
  handleDragStart(e: any, playerInfo: Player): void;
  handleDragOver(e: any, positionNumber: number): void;
  handleDrop(e: any, category: any): void;
}

const PlayerContext = createContext<PlayersContextData>(
  {} as PlayersContextData,
);

export const PlayerProvider: React.FC = ({ children }) => {
  const [playersInfo, setPlayersInfo] = useState<Player[]>([]);
  const [teamPlayersPosition, setTeamPlayersPosition] = useState<
    TeamPlayersPosition[]
  >([]);

  const handleDragOver = useCallback((e, positionNumber) => {
    e.preventDefault();
    console.log('onDragOver position', positionNumber);
  }, []);

  const handleDrop = useCallback((e, category) => {
    console.log('category drop', category);
    const playerName = e.dataTransfer.getData('playerName');
    console.log('drop playerName', playerName);
  }, []);

  const handleDragStart = useCallback((e, playerInfo) => {
    console.log('onDragStart');
    console.log('dragstart', playerInfo);
    const playerInfoData = e.dataTransfer.setData('playerInfo', playerInfo);
    console.log('DragStart playerInfoData', playerInfoData);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        player: playersInfo,
        handleDragStart,
        handleDragOver,
        handleDrop,
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

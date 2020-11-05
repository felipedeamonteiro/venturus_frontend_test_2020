import React, { createContext, useContext, useCallback, useState } from 'react';

interface Player {
  name: string;
  age: number;
  nationality: string;
  position: string;
}

interface PlayersContextData {
  player: Player[];
  handleDragStart(e: any, playername: string): void;
  handleDragOver(): void;
  handleDrop(): void;
}

const PlayerContext = createContext<PlayersContextData>(
  {} as PlayersContextData,
);

export const PlayerProvider: React.FC = ({ children }) => {
  const [playersInfo, setPlayersInfo] = useState<Player[]>([]);

  const handleDragStart = useCallback((e, playername) => {
    console.log('onDragStart');
  }, []);

  const handleDragOver = useCallback(() => {
    console.log('onDragOver');
  }, []);

  // const handleDragOver = useCallback(e => {
  //   e.preventDefault();
  // }, []);

  // const handleDrop = useCallback((e, category) => {
  //   const playerName = e.dataTransfer.getData('playerName');
  // }, []);

  // const handleDragStart = useCallback((e, playerName) => {
  //   console.log('dragstart', playerName);
  //   e.dataTransfer.setData('playerName', playerName);
  // }, []);

  const handleDrop = useCallback(() => {
    console.log('onDrop');
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

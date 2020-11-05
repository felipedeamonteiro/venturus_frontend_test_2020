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
  playerWasPutInField: boolean;
  playerInfoPutInField: Player;
  teamPlayersPosition: TeamPlayersPosition[];
  handleDragStart(e: any, playerInfo: Player): void;
  handleDragOver(e: any): void;
  handleDrop(e: any, positionNumber: number): void;
  setPlayerWasPutInField(a: boolean): void;
  handleClearFieldInfo(): void;
}

const PlayerContext = createContext<PlayersContextData>(
  {} as PlayersContextData,
);

export const PlayerProvider: React.FC = ({ children }) => {
  const [playersInfo, setPlayersInfo] = useState<Player[]>([]);
  const [teamPlayersPosition, setTeamPlayersPosition] = useState<
    TeamPlayersPosition[]
  >([]);
  const [playerWasPutInField, setPlayerWasPutInField] = useState<boolean>(
    false,
  );
  const [playerInfoPutInField, setPlayerInfoPutInField] = useState<Player>(
    {} as Player,
  );

  const handleDragStart = useCallback((e, playerInfo) => {
    e.dataTransfer.setData('playerInfo', JSON.stringify(playerInfo));
  }, []);

  const handleDragOver = useCallback(e => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e, positionNumber) => {
      const playerInfoMonster = e.dataTransfer.getData('playerInfo');
      const parsedPlayerInfo = JSON.parse(playerInfoMonster);
      setPlayersInfo([...playersInfo, parsedPlayerInfo]);
      const playerCompleteInfo: TeamPlayersPosition = {
        position: positionNumber,
        player: JSON.parse(playerInfoMonster),
      };
      setTeamPlayersPosition([...teamPlayersPosition, playerCompleteInfo]);
      setPlayerInfoPutInField(playerCompleteInfo.player);
      setPlayerWasPutInField(true);
    },
    [teamPlayersPosition, playersInfo],
  );

  const handleClearFieldInfo = useCallback(() => {
    setTeamPlayersPosition([]);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        player: playersInfo,
        handleDragStart,
        handleDragOver,
        handleDrop,
        teamPlayersPosition,
        playerInfoPutInField,
        playerWasPutInField,
        setPlayerWasPutInField,
        handleClearFieldInfo,
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

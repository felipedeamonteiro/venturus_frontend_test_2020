import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

export interface Player {
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
  clearPlayersInFieldState: boolean;
  playerInfoPutInField: Player;
  teamPlayersPosition: TeamPlayersPosition[];
  handleDragStart(e: any, playerInfo: Player): void;
  handleDragOver(e: any): void;
  handleDrop(e: any, positionNumber: number): void;
  setPlayerWasPutInField(a: boolean): void;
  handleClearFieldInfo(): void;
  setClearPlayersInFieldState(a: boolean): void;
}

const PlayerContext = createContext<PlayersContextData>(
  {} as PlayersContextData,
);

export const PlayerProvider: React.FC = ({ children }) => {
  const [playersInfoState, setPlayersInfoState] = useState<Player[]>([]);
  const [teamPlayersPosition, setTeamPlayersPosition] = useState<
    TeamPlayersPosition[]
  >([]);
  const [playerWasPutInField, setPlayerWasPutInField] = useState<boolean>(
    false,
  );
  const [playerInfoPutInField, setPlayerInfoPutInField] = useState<Player>(
    {} as Player,
  );
  const [clearPlayersInFieldState, setClearPlayersInFieldState] = useState<
    boolean
  >(false);
  const [
    onClearFieldPlayersGetBackToContainer,
    setOnClearFieldPlayersGetBackToContainer,
  ] = useState<Player[]>([]);

  useEffect(() => {
    if (clearPlayersInFieldState) {
      setTeamPlayersPosition([]);
    }
  }, [clearPlayersInFieldState]);

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
      setPlayersInfoState([...playersInfoState, parsedPlayerInfo]);
      const playerCompleteInfo: TeamPlayersPosition = {
        position: positionNumber,
        player: JSON.parse(playerInfoMonster),
      };
      setTeamPlayersPosition([...teamPlayersPosition, playerCompleteInfo]);
      setPlayerInfoPutInField(playerCompleteInfo.player);
      setPlayerWasPutInField(true);
    },
    [teamPlayersPosition, playersInfoState],
  );

  const handleClearFieldInfo = useCallback(() => {
    teamPlayersPosition.map(teamplayer =>
      setPlayersInfoState(state => [...state, teamplayer.player]),
    );
    setTeamPlayersPosition([]);
    setClearPlayersInFieldState(true);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        player: playersInfoState,
        teamPlayersPosition,
        playerInfoPutInField,
        playerWasPutInField,
        clearPlayersInFieldState,
        handleDragStart,
        handleDragOver,
        handleDrop,
        setClearPlayersInFieldState,
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

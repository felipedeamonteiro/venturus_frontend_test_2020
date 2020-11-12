/* eslint-disable guard-for-in */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
import React, { createContext, useContext, useCallback, useState } from 'react';
import { TeamPlayersPosition, Player } from './players';
import {
  lessFrequentElementInArray,
  mostFrequentElementInArray,
} from '../utils/helpingAlgorithmsFunctions';

export interface Team {
  id: string;
  teamName: string;
  description: string;
  website: string;
  teamType: 'Real' | 'Fantasy' | '';
  tags: string[] | [];
  formation: string;
  playersInfo: TeamPlayersPosition[];
}

export interface TableTeamData {
  id: string;
  name: string;
  description: string;
}

interface MostLessPickedPlayers {
  id: number;
  name: string;
}

interface PlayerAgeByTeam {
  team: string;
  playersAge: number[];
}

interface CalculatedAverageAges {
  team: string;
  avgAge: number;
}

interface TeamPlayersObject {
  [key: string]: number[];
}

interface TeamsContextData {
  teams: Team[];
  updateTeamData: TableTeamData;
  saveTeamInformation(teamSubmitInfo: Team): void;
  handleUpdateTeamData(teamSubmitInfo: Team): void;
  handleDeleteTeam(teamDataStringfied: string): void;
  setUpdateTeamData(teamData: TableTeamData): void;
  handleShowMostAndLessPickedPlayers(): void;
  handleHighestAndLowestAvgAgePlayers(): void;
  allPlayersSelected: MostLessPickedPlayers[];
  theMostPickedPlayer: MostLessPickedPlayers[];
  theLessPickedPlayer: MostLessPickedPlayers[];
  playersInfoDataState: Player[];
  lessPickedNumber: number;
  mostPickedNumber: number;
  allPlayersAgesOrganizedByTeams: PlayerAgeByTeam[];
  sortedHighestAvgAge: CalculatedAverageAges[];
  sortedLowestAvgAge: CalculatedAverageAges[];
}

const TeamsContext = createContext<TeamsContextData>({} as TeamsContextData);

export const TeamsProvider: React.FC = ({ children }) => {
  const [sortedHighestAvgAge, setSortedHighestAvgAge] = useState<
    CalculatedAverageAges[]
  >(() => {
    const highestAvgAgeArray = localStorage.getItem(
      '@VenturusTest:HighestAvgAge',
    );

    if (highestAvgAgeArray) {
      return JSON.parse(highestAvgAgeArray);
    }

    return [];
  });
  const [sortedLowestAvgAge, setSortedLowestAvgAge] = useState<
    CalculatedAverageAges[]
  >(() => {
    const lowestAvgAgeArray = localStorage.getItem(
      '@VenturusTest:LowestAvgAge',
    );

    if (lowestAvgAgeArray) {
      return JSON.parse(lowestAvgAgeArray);
    }

    return [];
  });
  const [
    allPlayersAgesOrganizedByTeams,
    setAllPlayersAgesOrganizedByTeams,
  ] = useState<PlayerAgeByTeam[]>([]);
  const [lessPickedNumber, setLessPickedNumber] = useState<number>(0);
  const [mostPickedNumber, setMostPickedNumber] = useState<number>(0);
  const [playersInfoDataState, setPlayersInfoDataState] = useState([] as any);
  const [theMostPickedPlayer, setTheMostPickedPlayer] = useState<
    MostLessPickedPlayers[]
  >([] as MostLessPickedPlayers[]);
  const [theLessPickedPlayer, setTheLessPickedPlayer] = useState<
    MostLessPickedPlayers[]
  >([] as MostLessPickedPlayers[]);
  const [allPlayersSelected, setAllPlayersSelected] = useState<
    MostLessPickedPlayers[]
  >([]);

  const [updateTeamData, setUpdateTeamData] = useState<TableTeamData>(
    {} as TableTeamData,
  );
  const [userTeamsInformation, setUserTeamsInformation] = useState<Team[]>(
    () => {
      const teamsData = localStorage.getItem('@VenturusTest:Teams');

      if (teamsData) {
        return JSON.parse(teamsData);
      }

      return [];
    },
  );

  // Used in CREATE Teams Page when submitting data
  const saveTeamInformation = useCallback(
    teamSubmitInfo => {
      setUserTeamsInformation([...userTeamsInformation, teamSubmitInfo]);
    },
    [userTeamsInformation],
  );

  // Used in UPDATE Teams Page when submitting data
  const handleUpdateTeamData = useCallback(
    teamUpdateSubmitInfo => {
      const filteredData = userTeamsInformation.filter(
        teamInformation => teamInformation.id !== teamUpdateSubmitInfo.id,
      );

      setUserTeamsInformation([...filteredData, teamUpdateSubmitInfo]);
    },
    [userTeamsInformation],
  );

  // Used in MY DASHBOARD to REMOVE a team from data and table
  const handleDeleteTeam = useCallback((teamDataStringfied: string) => {
    const teamData = JSON.parse(teamDataStringfied);
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure in removing this team?')) {
      setUserTeamsInformation(state =>
        state.filter(team => team.id !== teamData.id),
      );
    }
  }, []);

  // Used in MY DASHBOARD SOCCER FIELD1 to show data
  const handleShowMostAndLessPickedPlayers = useCallback(() => {
    let playersArrayByTeam: Player[] = [];
    let allPlayersNamesAndIds: MostLessPickedPlayers[] = [];
    let onlyPlayersInfo: Player[] = [];

    userTeamsInformation.forEach(userTeamData => {
      userTeamData.playersInfo.map(playerInfo => {
        playersArrayByTeam.push(playerInfo.player);
        onlyPlayersInfo.push(playerInfo.player);
      });
    });
    setPlayersInfoDataState(onlyPlayersInfo);

    playersArrayByTeam.forEach(playersArray => {
      allPlayersNamesAndIds.push({
        id: playersArray.id,
        name: playersArray.name,
      });
    });
    setAllPlayersSelected(allPlayersNamesAndIds);

    const mostPickedPlayer = mostFrequentElementInArray(allPlayersNamesAndIds);
    const lessPickedPlayer = lessFrequentElementInArray(allPlayersNamesAndIds);

    console.log('mostPickedPlayer', mostPickedPlayer);
    console.log('mostPickedPlayer', lessPickedPlayer);

    if (mostPickedPlayer && lessPickedPlayer) {
      const mostPickedPercentage = Number(
        (
          (mostPickedPlayer.quantity / playersInfoDataState.length) *
          100
        ).toFixed(2),
      );
      const lessPickedPercentage = Number(
        (
          (lessPickedPlayer.quantity / playersInfoDataState.length) *
          100
        ).toFixed(2),
      );
      setMostPickedNumber(mostPickedPercentage);
      setLessPickedNumber(lessPickedPercentage);
    }

    const realMostPickedPlayer = allPlayersNamesAndIds.filter(
      (playersData: any) => playersData.id === mostPickedPlayer,
    );

    const realLessPickedPlayer = allPlayersNamesAndIds.filter(
      (playersData: any) => playersData.id === lessPickedPlayer,
    );
    setTheMostPickedPlayer(realMostPickedPlayer);
    setTheLessPickedPlayer(realLessPickedPlayer);
  }, [playersInfoDataState.length, userTeamsInformation]);

  // Used in MY DASHBOARD TOP 5 to show data
  const handleHighestAndLowestAvgAgePlayers = useCallback(() => {
    const arrayPlayers: TeamPlayersObject = {};

    userTeamsInformation.map(team => {
      team.playersInfo.map(player => {
        if (!arrayPlayers[player.player.team]) {
          arrayPlayers[player.player.team] = [];
        }
        arrayPlayers[player.player.team].push(player.player.age);
      });
    });

    const teamAvgAges = Object.entries(arrayPlayers).map(([team]) => {
      const avgAge = Number(
        (
          arrayPlayers[team].reduce(
            (acc: number, age: number) => acc + age,
            0,
          ) / arrayPlayers[team].length
        ).toFixed(1),
      );

      return {
        team,
        avgAge,
      };
    });

    const sortedArrayByAge = teamAvgAges.sort((a, b) => a.avgAge - b.avgAge);

    let highestAvgAge: CalculatedAverageAges[] = [];
    let lowestAvgAge: CalculatedAverageAges[] = [];
    let z = sortedArrayByAge.length - 1;
    if (sortedArrayByAge.length < 4) {
      for (let i = 0; i < sortedArrayByAge.length; i++) {
        highestAvgAge.push(sortedArrayByAge[z]);
        lowestAvgAge.push(sortedArrayByAge[i]);
        z -= 1;
      }
    } else {
      for (let i = 0; i < 5; i++) {
        highestAvgAge.push(sortedArrayByAge[z]);
        lowestAvgAge.push(sortedArrayByAge[i]);
        z -= 1;
      }
    }
    setSortedHighestAvgAge(highestAvgAge);
    setSortedLowestAvgAge(lowestAvgAge);
    localStorage.setItem(
      '@VenturusTest:HighestAvgAge',
      JSON.stringify(highestAvgAge),
    );
    localStorage.setItem(
      '@VenturusTest:LowestAvgAge',
      JSON.stringify(lowestAvgAge),
    );
  }, [userTeamsInformation]);

  return (
    <TeamsContext.Provider
      value={{
        teams: userTeamsInformation,
        allPlayersAgesOrganizedByTeams,
        sortedHighestAvgAge,
        sortedLowestAvgAge,
        updateTeamData,
        allPlayersSelected,
        theMostPickedPlayer,
        theLessPickedPlayer,
        playersInfoDataState,
        lessPickedNumber,
        mostPickedNumber,
        saveTeamInformation,
        handleUpdateTeamData,
        handleDeleteTeam,
        setUpdateTeamData,
        handleShowMostAndLessPickedPlayers,
        handleHighestAndLowestAvgAgePlayers,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export function useTeams(): TeamsContextData {
  const context = useContext(TeamsContext);

  return context;
}

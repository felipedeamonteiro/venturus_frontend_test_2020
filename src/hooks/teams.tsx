import React, { createContext, useContext, useCallback, useState } from 'react';

export interface Team {
  id: string;
  teamName: string;
  description: string;
  website: string;
  teamType: 'Real' | 'Fantasy';
  tags: string[] | [];
  formation: string;
  playersInfo: string;
}

interface TeamsContextData {
  teams: Team[];
  saveTeamInformation(teamSubmitInfo: Team): void;
  updateTeamInformation(teamSubmitInfo: Team): void;
}

const TeamsContext = createContext<TeamsContextData>({} as TeamsContextData);

export const TeamsProvider: React.FC = ({ children }) => {
  const [userTeamsInformation, setUserTeamsInformation] = useState<Team[]>([]);

  const saveTeamInformation = useCallback(
    ({ teamSubmitInfo }) => {
      setUserTeamsInformation([...userTeamsInformation, teamSubmitInfo]);
      console.log('userTeamsInformation, no hook', userTeamsInformation);
    },
    [userTeamsInformation],
  );

  const updateTeamInformation = useCallback(
    ({ teamSubmitInfo }) => {
      const filteredData = userTeamsInformation.filter(
        teamInformation => teamInformation.id !== teamSubmitInfo.id,
      );

      setUserTeamsInformation([...filteredData, teamSubmitInfo]);
    },
    [userTeamsInformation],
  );

  // const handleShowMostAndLessPickedPlayers = useCallback(() => {
  //   // Use Quicksort applied to Javascript
  // }, []);

  // const handleHighestAndLowestAvgAgePlayers = useCallback(() => {
  //   // Use Quicksort applied to Javascript
  // }, []);

  return (
    <TeamsContext.Provider
      value={{
        teams: userTeamsInformation,
        saveTeamInformation,
        updateTeamInformation,
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

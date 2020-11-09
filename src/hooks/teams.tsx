import React, { createContext, useContext, useCallback, useState } from 'react';
import { TeamPlayersPosition } from './players';

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

interface TeamsContextData {
  teams: Team[];
  updateTeamData: TableTeamData;
  saveTeamInformation(teamSubmitInfo: Team): void;
  handleUpdateTeamData(teamSubmitInfo: Team): void;
  handleDeleteTeam(teamDataStringfied: string): void;
  setUpdateTeamData(teamData: TableTeamData): void;
}

const TeamsContext = createContext<TeamsContextData>({} as TeamsContextData);

export const TeamsProvider: React.FC = ({ children }) => {
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

  // Used in MY DASHBOARD to show data
  // const handleShowMostAndLessPickedPlayers = useCallback(() => {
  //   // Use Quicksort applied to Javascript
  // }, []);

  // Used in MY DASHBOARD to show data
  // const handleHighestAndLowestAvgAgePlayers = useCallback(() => {
  //   // Use Quicksort applied to Javascript
  // }, []);

  return (
    <TeamsContext.Provider
      value={{
        teams: userTeamsInformation,
        updateTeamData,
        saveTeamInformation,
        handleUpdateTeamData,
        handleDeleteTeam,
        setUpdateTeamData,
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

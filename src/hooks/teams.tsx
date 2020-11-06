import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

interface Team {
  id: string;
  teamName: string;
  description: string;
  website: string;
  teamType: 'Real' | 'Fantasy';
  tags: string[];
  formation: string;
  playersInfo: string;
}

interface TeamsContextData {
  teams: Team[];
}

const TeamsContext = createContext<TeamsContextData>({} as TeamsContextData);

export const TeamsProvider: React.FC = ({ children }) => {
  return (
    <TeamsContext.Provider
      value={{
        teams: [],
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

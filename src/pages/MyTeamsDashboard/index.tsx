import React, { useMemo, useCallback, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

import Table from '../../components/Table';
import SoccerField1 from '../../components/SoccerField1';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { MiddleContainer } from './styles';
import { Team, useTeams } from '../../hooks/teams';

interface Example {
  name: string;
  description: string;
}

const MyTeamsDashboard: React.FC = () => {
  const history = useHistory();
  const { teams, handleShowMostAndLessPickedPlayers } = useTeams();

  useEffect(() => {
    localStorage.setItem('@VenturusTest:Teams', JSON.stringify(teams));
    localStorage.removeItem('@VenturusTest:updateTeam');
    handleShowMostAndLessPickedPlayers();
  }, [handleShowMostAndLessPickedPlayers, teams]);

  const handleGoToCreateTeam = useCallback(() => {
    history.push('/create_team');
  }, [history]);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name' as keyof Example,
      },
      {
        Header: 'Description',
        accessor: 'description' as keyof Example,
      },
    ],
    [],
  );

  const treatedDataToTable = teams.map(team => ({
    id: team.id,
    name: team.teamName,
    description: team.description,
  }));

  const handleTeste = useCallback(() => {
    const testeDeMerda: Team = {
      description: 'Teste do Caralho',
      formation: '4 - 2 - 3 - 1',
      id: '107896d0-bde7-429b-a34l-5a2b5e3019b9',
      playersInfo: [
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 2,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 1,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 3,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 4,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 5,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 6,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 7,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 8,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 9,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 10,
        },
        {
          player: {
            age: 32,
            id: 77768,
            name: 'Everton José Modesto Silva',
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Flamengo',
          },
          position: 11,
        },
      ],
      tags: ['Caralho!!!!', 'Porraa!!'],
      teamName: 'Time Teste Eterno',
      teamType: 'Real',
      website: 'http://caralhodotime.com',
    };
    console.log('oi');
  }, []);

  return (
    <>
      <Header />

      <MiddleContainer>
        <div className="left-container">
          <div>
            <h1>My teams</h1>

            <button
              type="button"
              title="Test Button"
              onClick={handleTeste}
              style={{ background: 'purple' }}
            >
              <HiOutlinePlus size={17} color="#fff" />
            </button>

            <button
              type="button"
              title="Create a team"
              onClick={handleGoToCreateTeam}
            >
              <HiOutlinePlus size={17} color="#fff" />
            </button>
          </div>
          <Table columns={columns} data={treatedDataToTable} />
        </div>
        <div className="right-container">
          <div className="top-container">
            <h1>Top 5</h1>
            <div className="player-data">
              <div className="pd-left-container">
                <h3>Highest avg age</h3>
                <div className="pd2-left-container">
                  <div className="team-info">
                    <h5>Inter Milan</h5>
                    <h5>31.9</h5>
                  </div>
                  <div className="team-info">
                    <h5>APOEL Nicosia</h5>
                    <h5>31.7</h5>
                  </div>
                  <div className="team-info">
                    <h5>AC Milan</h5>
                    <h5>31.6</h5>
                  </div>
                  <div className="team-info">
                    <h5>Besiktas JK</h5>
                    <h5>31.4</h5>
                  </div>
                  <div className="team-info">
                    <h5>Olympiacos Piraeus</h5>
                    <h5>31.3</h5>
                  </div>
                </div>
              </div>
              <div className="pd-right-container">
                <h3>Lowest avg age</h3>
                <div className="pd2-right-container">
                  <div className="team-info">
                    <h5>Zalgiris Vinius</h5>
                    <h5>21.1</h5>
                  </div>
                  <div className="team-info">
                    <h5>Arsenal FC</h5>
                    <h5>21.6</h5>
                  </div>
                  <div className="team-info">
                    <h5>Ajax Amsterdam</h5>
                    <h5>22.0</h5>
                  </div>
                  <div className="team-info">
                    <h5>FC Nantes</h5>
                    <h5>22.1</h5>
                  </div>
                  <div className="team-info">
                    <h5>CSKA Moscow</h5>
                    <h5>22.5</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SoccerField1 />
        </div>
      </MiddleContainer>
      <Footer />
    </>
  );
};

export default MyTeamsDashboard;

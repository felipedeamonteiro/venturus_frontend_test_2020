import React, { useMemo, useCallback, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

import Table from '../../components/Table';
import SoccerField1 from '../../components/SoccerField1';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { MiddleContainer } from './styles';
import { useTeams } from '../../hooks/teams';

interface Example {
  name: string;
  description: string;
}

const MyTeamsDashboard: React.FC = () => {
  const history = useHistory();
  const { saveTeamInformation, teams } = useTeams();

  useEffect(() => {
    localStorage.setItem('@VenturusTest:Teams', JSON.stringify(teams));
  }, [teams]);

  const handleGoFoward = useCallback(() => {
    history.push('/create_team');
  }, [history]);

  const handleTestes = useCallback(() => {
    const testeDeMerda: any = {
      description: 'Time da doidera',
      formation: '4 - 2 - 3 - 1',
      id: 'f017825b-aeea-45a6-98b3-071b95cf8770',
      playersInfo: [
        {
          position: 11,
          player: {
            id: 9858,
            name: 'Sosthenes José Santos Salles',
            age: 33,
            nationality: 'Brazil',
            position: 'Attacker',
            team: 'Santos',
            season: 2016,
          },
        },
        {
          position: 2,
          player: {
            id: 10376,
            name: 'Jose Carlos Cracco Neto',
            age: 26,
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Santos',
            season: 2017,
          },
        },
        {
          position: 10,
          player: {
            id: 12915,
            name: 'Jose Henrique da Silva Dourado',
            age: 31,
            nationality: 'Brazil',
            position: 'Attacker',
            team: 'Santos',
            season: 2013,
          },
        },
        {
          position: 3,
          player: {
            id: 26945,
            name: 'Leonardo José Aparecido Moura',
            age: 33,
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Santos',
            season: 2015,
          },
        },
        {
          position: 8,
          player: {
            id: 35187,
            name: 'José Eduardo Bischofe de Almeida',
            age: 33,
            nationality: 'Brazil',
            position: 'Attacker',
            team: 'Santos',
            season: '2011',
          },
        },
        {
          position: 9,
          player: {
            id: 47319,
            name: 'Willian José',
            age: 29,
            nationality: 'Brazil',
            position: 'Attacker',
            team: 'Santos',
            season: 2013,
          },
        },
        {
          position: 6,
          player: {
            id: 77894,
            name: 'Elivelton José da Silva',
            age: 28,
            nationality: 'Brazil',
            position: 'Midfielder',
            team: 'Santos',
            season: '2011',
          },
        },
        {
          position: 7,
          player: {
            id: 80364,
            name: 'José Roberto da Silva Júnior',
            age: 43,
            nationality: 'Brazil',
            position: 'Midfielder',
            team: 'Santos',
            season: '2007',
          },
        },
        {
          position: 4,
          player: {
            id: 114515,
            name: 'Adaílton José dos Santos Filho',
            age: 34,
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Santos',
            season: '2009',
          },
        },
        {
          position: 1,
          player: {
            id: 234372,
            name: 'Jose Charles Soares Matos',
            age: 21,
            nationality: 'Brazil',
            position: 'Defender',
            team: 'Santos',
            season: '2018',
          },
        },
        {
          position: 5,
          player: {
            id: 80385,
            name: 'José Luis dos Santos Pinto',
            age: 28,
            nationality: 'Brazil',
            position: 'Midfielder',
            team: 'Santos',
            season: '2010',
          },
        },
      ],
      tags: [
        'dhsuishudsh',
        'sdijsoids',
        'sipdjsiodjsoid',
        'sidjsij',
        'sidjsoi',
        'sjdsij',
        'osdp',
        'osdk',
      ],
      teamName: 'Time doido',
      teamType: 'fantasy',
      website: 'http://timedoido.com',
    };
    saveTeamInformation(testeDeMerda);
  }, [saveTeamInformation]);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name' as keyof Example,
        sortType: 'basic',
      },
      {
        Header: 'Description',
        accessor: 'description' as keyof Example,
        sortType: 'basic',
      },
    ],
    [],
  );

  const treatedDataToTable = teams.map(team => ({
    name: team.teamName,
    description: team.description,
  }));

  return (
    <>
      <Header />

      <MiddleContainer>
        <div className="left-container">
          <div>
            <h1>My teams</h1>
            <p style={{ color: '#70008c' }}>botão de teste</p>
            <button
              type="button"
              title="Botão de teste"
              onClick={handleTestes}
              style={{ background: '#70008c' }}
            >
              <HiOutlinePlus size={17} color="#fff" />
            </button>
            <button
              type="button"
              title="Create a team"
              onClick={handleGoFoward}
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

import React, { useMemo, useCallback } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

import Table from '../../components/Table';
import SoccerField1 from '../../components/SoccerField1';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { MiddleContainer } from './styles';

interface Example {
  col1: string;
  col2: string;
}

const MyTeamsDashboard: React.FC = () => {
  const history = useHistory();

  const handleGoFoward = useCallback(() => {
    history.push('/create_team');
  }, [history]);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1' as keyof Example,
        sortType: 'basic',
      },
      {
        Header: 'Description',
        accessor: 'col2' as keyof Example,
        sortType: 'basic',
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'Real Madrid',
        col2: 'Real Madrid Squad',
      },
      {
        col1: 'Milan',
        col2: 'Milan Squad',
      },
      {
        col1: 'Liverpool',
        col2: 'Liverpool Squad',
      },
      {
        col1: 'Bayern Munich',
        col2: 'Bayern Munich Squad',
      },
      {
        col1: 'Lazio',
        col2: 'Lazio Squad',
      },
    ],
    [],
  );

  return (
    <>
      <Header />

      <MiddleContainer>
        <div className="left-container">
          <div>
            <h1>My teams</h1>
            <button
              type="button"
              title="Create a team"
              onClick={handleGoFoward}
            >
              <HiOutlinePlus size={17} color="#fff" />
            </button>
          </div>
          <Table columns={columns} data={data} />
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

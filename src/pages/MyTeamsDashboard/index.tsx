import React, { useMemo } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import logoImg from '../../assets/logo_v_.png';
import Table from '../../components/Table';

import { Container, Header, MiddleContainer, Footer } from './styles';

interface Example {
  col1: string;
  col2: string;
}

const MyTeamsDashboard: React.FC = () => {
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
    <Container>
      <Header>
        <div className="left-div">
          <img src={logoImg} alt="logo-venturus" />
          <h2>Squad Management Tool</h2>
        </div>
        <div className="right-div">
          <h4>Felipe Monteiro</h4>
          <div className="user-initials">FM</div>
        </div>
      </Header>
      <MiddleContainer>
        <div className="left-container">
          <div>
            <h1>My teams</h1>
            <button type="button" title="Create a team">
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
          <div className="bottom-container">
            <div className="central-line" />
            <div className="central-circle" />
            <div className="players-container">
              <div className="player-mpp">
                <h3 className="mpph3-letters">Most Picked Player</h3>
                <h3 className="mpph3-numbers">75%</h3>
                <div className="mpp-border">
                  <div className="most-picked-player">MP</div>
                </div>
              </div>
              <div className="player-lpp">
                <h3 className="lpph3-letters">Less Picked Player</h3>
                <h3 className="lpph3-numbers">25%</h3>
                <div className="lpp-border">
                  <div className="less-picked-player">LP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MiddleContainer>
      <Footer>2020 - All Rights Reserved</Footer>
    </Container>
  );
};

export default MyTeamsDashboard;

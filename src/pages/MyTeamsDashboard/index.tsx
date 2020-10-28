import React from 'react';
import logoImg from '../../assets/logo_v_.png';

import { Container, Header, MiddleContainer, Footer } from './styles';

const MyTeamsDashboard: React.FC = () => (
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
          <button type="button">+</button>
        </div>
      </div>
      <div className="right-container">
        <div className="top-container">
          <h1>Top 5</h1>
          <div className="player-data">
            <div className="pd-left-container">
              <h3>Highest avg age</h3>
              <div className="pd2-left-container">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="pd-right-container">
              <h3>Lowest avg age</h3>
              <div className="pd2-right-container">
                <div />
                <div />
                <div />
                <div />
                <div />
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

export default MyTeamsDashboard;

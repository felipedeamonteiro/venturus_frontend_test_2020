import React, { useMemo } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import logoImg from '../../assets/logo_v_.png';
import Table from '../../components/Table';

import { Container, Header, MiddleContainer, Footer } from './styles';

const CreateTeam: React.FC = () => (
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
      <div className="main-container">
        <h2>Create your team</h2>
        <div className="team-information-form">
          <h4>TEAM INFORMATION</h4>
        </div>
        <div className="configure-squad-container">
          <h4>CONFIGURE SQUAD</h4>
        </div>
      </div>
    </MiddleContainer>
    <Footer>2020 - All Rights Reserved</Footer>
  </Container>
);

export default CreateTeam;

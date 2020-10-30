import React, { useMemo } from 'react';
import logoImg from '../../assets/logo_v_.png';

import { Container, Header, MiddleContainer, Footer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import RadioButton from '../../components/RadioButton';
import SoccerField2 from '../../components/SoccerField2';

const CreateTeam: React.FC = () => {
  const radioInputs: string[] = ['Real', 'Fantasy'];

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
        <div className="main-container">
          <h2>Create your team</h2>
          <form id="form">
            <div className="upper-title">
              <h4>TEAM INFORMATION</h4>
            </div>
            <div className="team-information-form">
              <div className="upper-info">
                <div className="left-div">
                  <Input
                    name="team-name"
                    placeholder="Insert team name"
                    label="Team name"
                  />

                  <TextArea
                    label="Description"
                    form="form"
                    maxLength={300}
                    name="description"
                  />
                </div>
                <div className="right-div">
                  <Input
                    name="website"
                    placeholder="http://myteam.com"
                    label="Team website"
                  />

                  <RadioButton title="Team type" inputs={radioInputs} />

                  <div className="tags-input">
                    <textarea
                      form="form"
                      maxLength={150}
                      className="tags-input"
                      name="tags"
                    />
                    <label htmlFor="tags">Tags</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="configure-squad-container">
              <div className="bottom-title">
                <h4>CONFIGURE SQUAD</h4>
              </div>

              <div className="bottom-info">
                <div className="bottom-left-div">
                  <SoccerField2 />
                  <Button style={{ width: 300 }}>Save</Button>
                </div>

                <div className="bottom-right-div">
                  <Input
                    name="search-players"
                    placeholder="Search"
                    label="Search players"
                  />

                  <div className="players-container">
                    <div className="pc-upper-info">
                      <div className="player-name">
                        <h4>Name: </h4>
                        <p>Cristiano Ronaldo</p>
                      </div>
                      <div className="player-age">
                        <h4>Age: </h4>
                        <p>37</p>
                      </div>
                    </div>
                    <div className="pc-bottom-info">
                      <h4>Nationality: </h4>
                      <p>Portugal</p>
                    </div>
                  </div>

                  <div className="players-container">
                    <div className="pc-upper-info">
                      <div className="player-name">
                        <h4>Name: </h4>
                        <p>Ronaldo Luiz de Alves</p>
                      </div>
                      <div className="player-age">
                        <h4>Age: </h4>
                        <p>28</p>
                      </div>
                    </div>
                    <div className="pc-bottom-info">
                      <h4>Nationality: </h4>
                      <p>Brazil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </MiddleContainer>
      <Footer>2020 - All Rights Reserved</Footer>
    </Container>
  );
};

export default CreateTeam;

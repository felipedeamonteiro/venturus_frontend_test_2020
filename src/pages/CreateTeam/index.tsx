import React, { useMemo } from 'react';
import logoImg from '../../assets/logo_v_.png';

import { Container, Header, MiddleContainer, Footer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';

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

                <div className="radio-input">
                  <p className="team-type">Team type</p>
                  <label className="choice">
                    <input
                      className="bolin"
                      type="radio"
                      name="radiob"
                      id="radioal"
                      value="Real"
                    />
                    <p className="p-real">Real</p>
                    <span className="checkmark" />
                  </label>
                  <label className="choice">
                    <input
                      className="bolin"
                      type="radio"
                      name="radiob"
                      id="radiosome"
                      value="Fantasy"
                    />
                    <p>Fantasy</p>
                    <span className="checkmark" />
                  </label>
                </div>

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
                <label htmlFor="formation-box">Formation</label>
                <select name="formation-box" id="formation-box">
                  <option value="3 - 2 - 2 - 3">3 - 2 - 2 - 3</option>
                  <option value="3 - 2 - 3 - 1">3 - 2 - 3 - 1</option>
                  <option value="3 - 4 - 3">3 - 4 - 3</option>
                  <option value="3 - 5 - 2">3 - 5 - 2</option>
                  <option value="4 - 2 - 3 - 1">4 - 2 - 3 - 1</option>
                  <option value="4 - 3 - 1 - 1">4 - 3 - 1 - 1</option>
                  <option value="4 - 3 - 2">4 - 3 - 2</option>
                  <option value="4 - 4 - 2">4 - 4 - 2</option>
                  <option value="4 - 5 - 1">4 - 5 - 1</option>
                  <option value="5 - 4 - 1">5 - 4 - 1</option>
                </select>
                <div className="soccer-field">
                  <div className="soccer-field-line" />
                  <div className="soccer-field-circle" />
                </div>
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

export default CreateTeam;

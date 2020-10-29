/* eslint-disable jsx-a11y/label-has-associated-control */
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
        <form>
          <div className="team-information-form">
            <h4>TEAM INFORMATION</h4>
            <div className="upper-info">
              <div className="left-div">
                <label htmlFor="team-name">Team name</label>
                <input
                  type="text"
                  name="team-name"
                  placeholder="Insert team name"
                />

                <label htmlFor="description">Description</label>
                <input type="text" name="description" />
              </div>
              <div className="right-div">
                <label htmlFor="website">Team website</label>
                <input
                  type="text"
                  name="website"
                  placeholder="http://myteam.com"
                />

                <div className="radio-input">
                  <p className="team-type">Team type</p>
                  <label className="choice">
                    <input
                      className="bolin"
                      type="radio"
                      name="radiob"
                      id="radioal"
                      value="Always"
                    />
                    Real
                    <span className="checkmark" />
                  </label>
                  <label className="choice">
                    <input
                      className="bolin"
                      type="radio"
                      name="radiob"
                      id="radiosome"
                      value="Sometimes"
                    />
                    Fantasy
                    <span className="checkmark" />
                  </label>
                </div>

                <div className="tags-input">
                  <label htmlFor="tags">Tags</label>
                  <input type="text" name="tags" />
                </div>
              </div>
            </div>
          </div>
          <div className="configure-squad-container">
            <h4>CONFIGURE SQUAD</h4>
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
                <div className="soccer-field" />
              </div>

              <div className="bottom-right-div">
                <label htmlFor="search-players">Search Players</label>
                <input type="text" name="search-players" />

                <div className="players-container">
                  <div className="players-info">
                    <div className="pi-upper-info">
                      <div>
                        <h4>Name: </h4>
                        <p>Cristiano Ronaldo</p>
                      </div>
                      <div>
                        <h4>Age: </h4>
                        <p>37</p>
                      </div>
                    </div>
                    <div className="pi-bottom-info">
                      <h4>Nacionality: </h4>
                      <p>Portugal</p>
                    </div>
                  </div>
                </div>

                <div className="players-container">
                  <div className="players-info">
                    <div className="pi-upper-info">
                      <div>
                        <h4>Name: </h4>
                        <p>Ronaldo Luiz de Alves</p>
                      </div>
                      <div>
                        <h4>Age: </h4>
                        <p>28</p>
                      </div>
                    </div>
                    <div className="pi-bottom-info">
                      <h4>Nacionality: </h4>
                      <p>Brazil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </MiddleContainer>
    <Footer>2020 - All Rights Reserved</Footer>
  </Container>
);

export default CreateTeam;

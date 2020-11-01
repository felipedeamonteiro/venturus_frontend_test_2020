import React from 'react';

import { MiddleContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import RadioButton from '../../components/RadioButton';
import SoccerField2 from '../../components/SoccerField2';
import PlayersContainer from '../../components/PlayersContainer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CreateTeam: React.FC = () => {
  const radioInputs: string[] = ['Real', 'Fantasy'];
  const playersData = [
    {
      name: 'Cristiano Ronaldo',
      age: 37,
      nationality: 'Portugal',
    },
    {
      name: 'Ronaldo Luiz de Alves',
      age: 28,
      nationality: 'Brazil',
    },
  ];

  return (
    <>
      <Header />
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
                  <PlayersContainer data={playersData} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </MiddleContainer>
      <Footer />
    </>
  );
};

export default CreateTeam;

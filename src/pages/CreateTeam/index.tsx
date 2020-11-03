import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import { MiddleContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import RadioButton, { RadioOption } from '../../components/RadioButton';
import Tags from '../../components/Tags';
import SoccerField2 from '../../components/SoccerField2';
import PlayersContainer from '../../components/PlayersContainer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CreateTeam: React.FC = () => {
  const handleSubmit = useCallback((data: any): void => {
    console.log(data);
  }, []);

  const radioOptions: RadioOption[] = [
    {
      value: 'real',
      label: 'Real',
    },
    {
      value: 'fantasy',
      label: 'Fantasy',
    },
  ];
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
          <Form onSubmit={handleSubmit} id="form">
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

                  <RadioButton
                    name="radio-buttom"
                    title="Team type"
                    options={radioOptions}
                  />

                  <Tags name="tags" label="Tags" />
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
                  <Button type="submit" style={{ width: 300 }}>
                    Save
                  </Button>
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
          </Form>
        </div>
      </MiddleContainer>
      <Footer />
    </>
  );
};

export default CreateTeam;

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';

import { BiArrowBack, BiSearchAlt2 } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
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

interface PlayersData {
  name: string;
  age: number;
  nationality: string;
}

const CreateTeam: React.FC = () => {
  const [searchTeam, setSearchTeam] = useState<string>('');
  const [searchTeamCountry, setSearchTeamCountry] = useState<string>('');
  const [teamId, setTeamId] = useState<string>('');
  const [searchPlayer, setSearchPlayer] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [playersData, setPlayersData] = useState<PlayersData[]>([]);
  const history = useHistory();

  const handleSubmit = useCallback((data: any): void => {
    console.log(data);
  }, []);

  const handleClearPlayersInfo = useCallback(() => {
    setSearchTeam('');
    setSearchTeamCountry('');
    setTeamId('');
    setSearchPlayer('');
    setIsComplete(false);
    setPlayersData([]);
  }, []);

  const handleSearchTeams = useCallback(async () => {
    try {
      const { data } = await api.get('teams', {
        params: {
          name: searchTeam,
          country: searchTeamCountry,
        },
      });
      setTeamId(data.response[0].team.id);
      setIsComplete(true);
    } catch (error) {
      console.error('error', error);
    }
  }, [searchTeam, searchTeamCountry]);

  const handleSearchPlayers = useCallback(async () => {
    try {
      const { data } = await api.get('players', {
        params: {
          search: searchPlayer,
          team: teamId,
        },
      });

      const customPlayersData = data.response.map(
        (superData: any): PlayersData => {
          return {
            name: superData.player.name,
            age: superData.player.age,
            nationality: superData.player.nationality,
          };
        },
      );
      setPlayersData(customPlayersData);
    } catch (error) {
      console.error('error', error);
    }
  }, [searchPlayer, teamId]);

  const handleGetBack = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

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

  return (
    <>
      <Header />
      <MiddleContainer>
        <div className="main-container">
          <h2>Create your team</h2>
          <button type="button" className="arrow" onClick={handleGetBack}>
            <BiArrowBack size={20} />
            <p>Voltar</p>
          </button>
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
                  <div className="search-team-div">
                    <Input
                      name="search-teams"
                      placeholder="Search"
                      label="Search teams"
                      value={searchTeam}
                      onChange={e => setSearchTeam(e.target.value)}
                    />
                    <Input
                      name="search-team-country"
                      placeholder="Search"
                      label="Team country"
                      value={searchTeamCountry}
                      onChange={e => setSearchTeamCountry(e.target.value)}
                    />
                    <button
                      title="Search for a team and its country to open player search"
                      type="button"
                      onClick={handleSearchTeams}
                    >
                      <BiSearchAlt2 size={20} />
                    </button>
                  </div>

                  <div>
                    <Input
                      name="search-players"
                      placeholder="Search"
                      label="Search players"
                      disabled={!isComplete}
                      value={searchPlayer}
                      onChange={e => setSearchPlayer(e.target.value)}
                    />
                    <div className="bottom-buttons">
                      <button
                        title="Search for players"
                        type="button"
                        onClick={handleSearchPlayers}
                      >
                        <BiSearchAlt2 size={20} />
                      </button>
                      <button
                        type="button"
                        className="clear-button"
                        onClick={handleClearPlayersInfo}
                      >
                        <p>Clear players data</p>
                      </button>
                    </div>
                  </div>
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

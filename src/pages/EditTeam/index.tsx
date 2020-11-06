import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';

import { BiArrowBack, BiSearchAlt2 } from 'react-icons/bi';
import { VscLoading } from 'react-icons/vsc';
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
  position: string;
}

const CreateTeam: React.FC = () => {
  const [searchTeam, setSearchTeam] = useState<string>('');
  const [searchTeamCountry, setSearchTeamCountry] = useState<string>('');
  const [teamId, setTeamId] = useState<string>('');
  const [searchPlayer, setSearchPlayer] = useState<string>('');
  const [firstSearchIsComplete, setFirstSearchIsComplete] = useState<boolean>(
    false,
  );
  const [playersData, setPlayersData] = useState<PlayersData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoading2, setIsLoading2] = useState<boolean>(false);
  const [gotError1, setGotError1] = useState<boolean>(false);
  const [error1, setError1] = useState<string[]>([]);
  const [error2, setError2] = useState<string[]>([]);
  const [gotError2, setGotError2] = useState<boolean>(false);
  const history = useHistory();

  const handleSubmit = useCallback((data: any): void => {
    console.log(data);
  }, []);

  const handleClearPlayersInfo = useCallback(() => {
    setSearchTeam('');
    setSearchTeamCountry('');
    setTeamId('');
    setSearchPlayer('');
    setFirstSearchIsComplete(false);
    setPlayersData([]);
    setError1([]);
    setError2([]);
    setGotError1(false);
    setGotError2(false);
  }, []);

  const handleSearchTeams = useCallback(async () => {
    try {
      setError1([]);
      setGotError1(false);
      setIsLoading(true);
      const { data } = await api.get('teams', {
        params: {
          name: searchTeam,
          country: searchTeamCountry,
        },
      });

      if (
        typeof data.errors.name === typeof 'string' ||
        typeof data.errors.country === typeof 'string'
      ) {
        setIsLoading(false);
        setGotError1(true);
        if (
          typeof data.errors.name === typeof 'string' &&
          typeof data.errors.country === typeof 'string'
        ) {
          setError1([data.errors.name, data.errors.country]);
        } else if (typeof data.errors.name === typeof 'string') {
          setError1([data.errors.name]);
        } else {
          setError1([data.errors.country]);
        }
        return;
      }

      if (data.results === 0) {
        setIsLoading(false);
        setGotError1(true);
        setError1([
          'It was not found any teams with this name in this country. Try again.',
        ]);
        return;
      }

      setTeamId(data.response[0].team.id);
      setFirstSearchIsComplete(true);
      setIsLoading(false);
    } catch (error) {
      setGotError1(true);
      setError1([error]);
      setIsLoading(false);
    }
  }, [searchTeam, searchTeamCountry]);

  const handleSearchPlayers = useCallback(async () => {
    try {
      setPlayersData([]);
      setError2([]);
      setGotError2(false);
      setIsLoading2(true);
      const { data } = await api.get('players', {
        params: {
          search: searchPlayer,
          team: teamId,
        },
      });

      if (typeof data.errors.search === typeof 'string') {
        setIsLoading2(false);
        setGotError2(true);
        setError2([data.errors.search]);
        return;
      }

      if (data.results === 0) {
        setIsLoading2(false);
        setGotError2(true);
        setError2(['It was not found any players with this name. Try again.']);
        return;
      }

      const customPlayersData = data.response.map(
        (superData: any): PlayersData => {
          return {
            name: superData.player.name,
            age: superData.player.age,
            nationality: superData.player.nationality,
            position: superData.statistics[0].games.position,
          };
        },
      );
      setPlayersData(customPlayersData);
      setIsLoading2(false);
    } catch (error) {
      setGotError2(true);
      setError2([error]);
      setIsLoading2(false);
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
                    name="team-type"
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
                      name="search-team"
                      placeholder="Search"
                      label="Search team name"
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
                    <div className="button-errors-loading-div">
                      <button
                        title="Search for a team and its country to open player search"
                        type="button"
                        onClick={handleSearchTeams}
                      >
                        <BiSearchAlt2 size={20} />
                      </button>
                      {gotError1 ? (
                        <span className="error-messages1">
                          <ul>
                            <li>{error1[0]}</li>
                            <li>{error1[1]}</li>
                          </ul>
                        </span>
                      ) : (
                        ''
                      )}
                      {isLoading ? (
                        <span className="animated-icon">
                          <VscLoading size={20} color="#a6006a" />
                          <p>Loading...</p>
                        </span>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>

                  <div>
                    <Input
                      name="search-players"
                      placeholder="Search"
                      label="Search players"
                      disabled={!firstSearchIsComplete}
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
                      {gotError2 ? (
                        <span className="error-messages2">
                          <p>{error2}</p>
                        </span>
                      ) : (
                        ''
                      )}
                      {isLoading2 ? (
                        <span className="animated-icon2">
                          <VscLoading size={20} color="#a6006a" />
                          <p>Loading...</p>
                        </span>
                      ) : (
                        ''
                      )}
                      <button
                        type="button"
                        className="clear-button"
                        onClick={handleClearPlayersInfo}
                      >
                        <p>Clear players data</p>
                      </button>
                    </div>
                  </div>
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

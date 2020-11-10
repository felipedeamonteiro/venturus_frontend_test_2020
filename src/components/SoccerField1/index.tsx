/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { useTeams } from '../../hooks/teams';
import { Player } from '../../hooks/players';

const SoccerField1: React.FC = () => {
  const [mostPickedNameInitials, setMostPickedNameInitials] = useState<string>(
    () => {
      const mostPickedInitials = localStorage.getItem(
        '@VenturusTest:mostPickedInitials',
      );

      if (mostPickedInitials) {
        return JSON.parse(mostPickedInitials);
      }

      return '';
    },
  );
  const [mostPickedPlayerData, setMostPickedPlayerData] = useState<Player[]>(
    () => {
      const mostPickedPlayer = localStorage.getItem(
        '@VenturusTest:mostPickedPlayer',
      );

      if (mostPickedPlayer) {
        return JSON.parse(mostPickedPlayer);
      }

      return [] as Player[];
    },
  );
  const [mostPickedPlayerBoolean, setMostPickedPlayerBoolean] = useState<
    boolean
  >(() => {
    const mostPickedPlayer = localStorage.getItem(
      '@VenturusTest:mostPickedPlayer',
    );

    if (mostPickedPlayer) {
      return true;
    }

    return false;
  });

  const [lessPickedNameInitials, setLessPickedNameInitials] = useState<string>(
    () => {
      const lessPickedInitials = localStorage.getItem(
        '@VenturusTest:lessPickedInitials',
      );

      if (lessPickedInitials) {
        return JSON.parse(lessPickedInitials);
      }

      return '';
    },
  );
  const [lessPickedPlayerData, setLessPickedPlayerData] = useState<Player[]>(
    () => {
      const lessPickedPlayer = localStorage.getItem(
        '@VenturusTest:lessPickedPlayer',
      );

      if (lessPickedPlayer) {
        return JSON.parse(lessPickedPlayer);
      }

      return [] as Player[];
    },
  );
  const [lessPickedPlayerBoolean, setLessPickedPlayerBoolean] = useState<
    boolean
  >(() => {
    const lessPickedPlayer = localStorage.getItem(
      '@VenturusTest:lessPickedPlayer',
    );

    if (lessPickedPlayer) {
      return true;
    }

    return false;
  });

  const {
    theLessPickedPlayer,
    theMostPickedPlayer,
    playersInfoDataState,
    lessPickedNumber,
    mostPickedNumber,
  } = useTeams();

  useEffect(() => {
    if (theMostPickedPlayer.length > 0) {
      const firstNameMostPicked = theMostPickedPlayer[0].name.split(' ')[0];
      const lastNameMostPicked = theMostPickedPlayer[0].name
        .split(' ')
        .splice(-1)[0];
      const mostPickedInitials: string =
        firstNameMostPicked[0] + lastNameMostPicked[0];

      setMostPickedNameInitials(mostPickedInitials);
      localStorage.setItem(
        '@VenturusTest:mostPickedInitials',
        JSON.stringify(mostPickedInitials),
      );
      const mostPickedPlayer = playersInfoDataState.filter(
        (player: Player) => player.id === theMostPickedPlayer[0].id,
      );
      setMostPickedPlayerData(mostPickedPlayer);
      localStorage.setItem(
        '@VenturusTest:mostPickedPlayer',
        JSON.stringify(mostPickedPlayer),
      );
      setMostPickedPlayerBoolean(true);
    }

    if (theLessPickedPlayer.length > 0) {
      const firstNameLessPicked = theLessPickedPlayer[0].name.split(' ')[0];
      const lastNameLessPicked = theLessPickedPlayer[0].name
        .split(' ')
        .splice(-1)[0];
      const lessPickedInitials: string =
        firstNameLessPicked[0] + lastNameLessPicked[0];

      setLessPickedNameInitials(lessPickedInitials);
      localStorage.setItem(
        '@VenturusTest:lessPickedInitials',
        JSON.stringify(lessPickedInitials),
      );
      const lessPickedPlayer = playersInfoDataState.filter(
        (player: any) => player.id === theLessPickedPlayer[0].id,
      );
      setLessPickedPlayerData(lessPickedPlayer);
      localStorage.setItem(
        '@VenturusTest:lessPickedPlayer',
        JSON.stringify(lessPickedPlayer),
      );
      setLessPickedPlayerBoolean(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="central-line" />
      <div className="central-circle" />
      <div className="players-container">
        <div className="player-mpp">
          <h3 className="mpph3-letters">Most Picked Player</h3>
          <h3 className="mpph3-numbers">{mostPickedNumber}%</h3>
          {mostPickedPlayerBoolean ? (
            <div className="mp-tooltip-div">
              <div>
                <p>Name:</p>
                <p>{mostPickedPlayerData[0].name}</p>
              </div>
              <div>
                <p>Age:</p>
                <p>{mostPickedPlayerData[0].age}</p>
              </div>
              <div>
                <p>Nationality:</p>
                <p>{mostPickedPlayerData[0].nationality}</p>
              </div>
              <div>
                <p>Position:</p>
                <p>{mostPickedPlayerData[0].position}</p>
              </div>
              <div>
                <p>Team:</p>
                <p>{mostPickedPlayerData[0].team}</p>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="mpp-border">
            <div className="most-picked-player">{mostPickedNameInitials}</div>
          </div>
        </div>
        <div className="player-lpp">
          <h3 className="lpph3-letters">Less Picked Player</h3>
          <h3 className="lpph3-numbers"> {lessPickedNumber}%</h3>
          {lessPickedPlayerBoolean ? (
            <div className="lp-tooltip-div">
              <div>
                <p>Name:</p>
                <p>{lessPickedPlayerData[0].name}</p>
              </div>
              <div>
                <p>Age:</p>
                <p>{lessPickedPlayerData[0].age}</p>
              </div>
              <div>
                <p>Nationality:</p>
                <p>{lessPickedPlayerData[0].nationality}</p>
              </div>
              <div>
                <p>Position:</p>
                <p>{lessPickedPlayerData[0].position}</p>
              </div>
              <div>
                <p>Team:</p>
                <p>{lessPickedPlayerData[0].team}</p>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="lpp-border">
            <div className="less-picked-player">{lessPickedNameInitials}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SoccerField1;

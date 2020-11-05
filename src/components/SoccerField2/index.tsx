import React, { useCallback, useState } from 'react';

import PlayerDropablePosition from '../PlayerDropablePosition';
import { Container } from './styles';

const SoccerField2: React.FC = () => {
  const [formationValue, setformationValue] = useState<string>('');
  const handleChange = useCallback(e => {
    const { value } = e.target;
    console.log('value', value);
    setformationValue(value);
  }, []);

  return (
    <Container formationValue={formationValue}>
      <label htmlFor="formation-box">Formation</label>
      <select onChange={handleChange} name="formation-box" id="formation-box">
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
        <div className="player-formation">
          {formationValue === '3 - 2 - 2 - 3' && (
            <div className="formation-field">
              <div className="goalKeeper">
                <PlayerDropablePosition positionNumber={1} />
              </div>
              <div className="defenders">
                <PlayerDropablePosition positionNumber={2} />
                <PlayerDropablePosition positionNumber={3} />
                <PlayerDropablePosition positionNumber={4} />
              </div>
              <div className="midFields1">
                <PlayerDropablePosition positionNumber={5} />
                <PlayerDropablePosition positionNumber={6} />
              </div>
              <div className="midFields2">
                <PlayerDropablePosition positionNumber={7} />
                <PlayerDropablePosition positionNumber={8} />
              </div>
              <div className="attackers">
                <PlayerDropablePosition positionNumber={9} />
                <PlayerDropablePosition positionNumber={10} />
                <PlayerDropablePosition positionNumber={11} />
              </div>
            </div>
          )}
          {/* {formationValue === '3 - 2 - 3 - 1' && ()}
          {formationValue === '3 - 4 - 3' && ()}
          {formationValue === '3 - 5 - 2' && ()}
          {formationValue === '4 - 2 - 3 - 1' && ()}
          {formationValue === '4 - 3 - 1 - 1' && ()}
          {formationValue === '4 - 3 - 2' && ()}
          {formationValue === '4 - 4 - 2' && ()}
          {formationValue === '4 - 5 - 1' && ()}
          {formationValue === '5 - 4 - 1' && ()} */}

          {/* <PlayerDropablePosition positionNumber={1} />
          <PlayerDropablePosition positionNumber={2} />
          <PlayerDropablePosition positionNumber={3} />
          <PlayerDropablePosition positionNumber={4} />
          <PlayerDropablePosition positionNumber={5} />
          <PlayerDropablePosition positionNumber={6} />
          <PlayerDropablePosition positionNumber={7} />
          <PlayerDropablePosition positionNumber={8} />
          <PlayerDropablePosition positionNumber={9} />
          <PlayerDropablePosition positionNumber={10} />
          <PlayerDropablePosition positionNumber={11} /> */}
        </div>
      </div>
    </Container>
  );
};

export default SoccerField2;

import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface RadioProps extends InputHTMLAttributes<HTMLButtonElement> {
  title: string;
  inputs: string[];
}

const RadioButton: React.FC<RadioProps> = ({ title, inputs }) => (
  <Container>
    <p>{title}</p>
    {inputs.map(input => (
      <label key={input}>
        <input
          className="bolin"
          type="radio"
          name="radiob"
          id="radioal"
          value={input}
        />
        <p>{input}</p>
        <span />
      </label>
    ))}
  </Container>
);

export default RadioButton;

import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, name, placeholder }) => (
  <Container>
    <input type="text" name={name} placeholder={placeholder} />
    {label ? <label htmlFor={name}>{label}</label> : ''}
  </Container>
);

export default Input;

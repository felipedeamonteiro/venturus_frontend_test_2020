import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  label,
  name,
  placeholder,
  value,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isDisabled={disabled}>
      <input
        ref={inputRef}
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onKeyPress={e => {
          if (e.key === 'Enter') e.preventDefault();
        }}
        {...rest}
      />

      {label ? <label htmlFor={name}>{label}</label> : ''}
      <span style={{ color: '#c53030' }}>{error}</span>
    </Container>
  );
};

export default Input;

import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...props }) => (
  <Container>
    <textarea {...props} />
    <label htmlFor={name}>{label}</label>
  </Container>
);

export default TextArea;

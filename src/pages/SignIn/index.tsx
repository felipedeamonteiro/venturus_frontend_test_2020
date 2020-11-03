import React from 'react';

import { Form } from '@unform/web';
import { Container } from './styles';
import LogoColorido from '../../assets/logo_colorido.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <img src={LogoColorido} alt="Logo Venturus" />
      <h3>Venturus FrontEnd Developer Test</h3>
      <Form onSubmit={handleSubmit} id="signin-form">
        <Input
          placeholder="Type your first and last names to sign in"
          name="signin"
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;

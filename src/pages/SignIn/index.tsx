import React from 'react';

import { Container } from './styles';
import LogoColorido from '../../assets/logo_colorido.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <img src={LogoColorido} alt="Logo Venturus" />
    <h3>Venturus FrontEnd Developer Test</h3>
    <form id="signin-form">
      <Input
        placeholder="Type your first and last names to sign in"
        name="signin"
      />
      <Button>Sign In</Button>
    </form>
  </Container>
);

export default SignIn;

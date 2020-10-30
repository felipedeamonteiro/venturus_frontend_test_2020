import React from 'react';

import { Container } from './styles';
import LogoColorido from '../../assets/logo_colorido.png';

const SignIn: React.FC = () => (
  <Container>
    <img src={LogoColorido} alt="Logo Venturus" />
    <h3>Teste Desenvolvedor FrontEnd Venturus</h3>
    <h5>Digite seu nome para entrar</h5>
    <input type="text" />
    <button type="button">Entrar</button>
  </Container>
);

export default SignIn;

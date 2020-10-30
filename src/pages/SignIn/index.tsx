/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Container } from './styles';
import LogoColorido from '../../assets/logo_colorido.png';

const SignIn: React.FC = () => (
  <Container>
    <img src={LogoColorido} alt="Logo Venturus" />
    <h3>Venturus FrontEnd Developer Test</h3>
    <form id="signin-form">
      <div className="div-signin">
        <input type="text" name="signin" />
        <label htmlFor="signin" form="signin-form">
          Type your first and last names to sign in
        </label>
      </div>
      <button type="button">Sign In</button>
    </form>
  </Container>
);

export default SignIn;

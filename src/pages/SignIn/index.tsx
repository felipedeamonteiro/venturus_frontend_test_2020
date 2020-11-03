import React, { useCallback } from 'react';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { Container } from './styles';
import LogoColorido from '../../assets/logo_colorido.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(async (data: any) => {
    try {
      const schema = Yup.object().shape({
        signin: Yup.string()
          .matches(
            /[A-Z][a-z]* [A-Z][a-z]*/,
            'Incorrect format. Try Again, example: Felipe Monteiro',
          )
          .required('Name required! Example: Felipe Monteiro'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }, []);

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

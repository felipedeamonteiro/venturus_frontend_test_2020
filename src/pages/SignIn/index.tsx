import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';
import LogoColorido from '../../assets/logo_colorido.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  signin: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

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

        signIn({
          name: data.signin,
        });
      } catch (error) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <img src={LogoColorido} alt="Logo Venturus" />
      <h3>Venturus FrontEnd Developer Test</h3>
      <Form ref={formRef} onSubmit={handleSubmit} id="signin-form">
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

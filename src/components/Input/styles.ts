import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  input {
    width: 350px;
    margin-bottom: 30px;
    box-sizing: border-box;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 5px;

    &::placeholder {
      color: #b5bcc7;
    }

    &:focus {
      border: 1px solid #de0039;
    }
  }

  input:focus + label {
    color: #de0039;
  }
`;

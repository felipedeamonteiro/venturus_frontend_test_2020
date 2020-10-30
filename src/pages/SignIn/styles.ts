import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 150px;

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 30px;
  }

  .div-signin {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

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
  }

  button {
    width: 350px;
    height: 40px;
    padding: 10px;
    border: none;
    font-weight: 500;
    border-radius: 5px;
    color: #fff;
    background: linear-gradient(to bottom, #de0039, #70008c);
  }
`;

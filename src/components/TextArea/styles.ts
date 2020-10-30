import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;

  textarea {
    resize: none;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 5px;
    font-size: 16px;
    height: 170px;
    font-family: 'Roboto Slab', serif;

    &:focus {
      border: 1px solid #de0039;
    }
  }

  textarea:focus + label {
    color: #de0039;
  }
`;

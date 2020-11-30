import styled from 'styled-components';

export const Container = styled.div`
  height: 120vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  place-content: center;

  width: 100%;
  max-width: 700px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 150px;

  button {
    width: 370px;
  }

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 30px;
  }
`;

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 35px;

  place-content: center;

  width: 100%;
`;

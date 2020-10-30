import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > label {
    margin-right: 20px;
    font-weight: 500;
  }
  select {
    width: 100px;
    height: 30px;
    padding: 5px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 2px lightgray;
  }

  .soccer-field {
    margin: 20px 0;
    width: 300px;
    height: 420px;
    border-radius: 5px;
    background: linear-gradient(to bottom, #de0039, #70008c);
    display: flex;
    justify-content: center;
    align-items: center;

    .soccer-field-line {
      position: absolute;
      box-sizing: inherit;
      width: 290px;
      height: 1px;
      border-top: solid 1px ${shade(0.4, '#fff')};
    }

    .soccer-field-circle {
      position: absolute;
      width: 90px;
      height: 90px;
      border: 1px solid ${shade(0.4, '#fff')};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      :after {
        position: absolute;
        width: 1px;
        height: 1px;
        background-color: #fff;
        content: '';
        border: 1px solid ${shade(0.4, '#fff')};
        border-radius: 50%;
      }
    }
  }
`;

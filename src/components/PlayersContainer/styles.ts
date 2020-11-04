import styled from 'styled-components';

export const Container = styled.div`
  .players-container {
    width: 350px;
    height: 65px;
    background: linear-gradient(to bottom, #f9f9f9, #e6e6e6);
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;

    h4 {
      margin-right: 5px;
    }

    p {
      color: #de0039;
      font-size: 14px;
    }

    .pc-upper-info {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin: 8px 0;
      }
    }

    .pc-bottom-info {
      width: 90%;
      display: flex;
      align-items: center;
    }
  }
`;

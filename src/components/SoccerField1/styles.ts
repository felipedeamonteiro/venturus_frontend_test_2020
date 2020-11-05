import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  border-radius: 15px;
  height: 300px;
  margin: 50px 40px 0;
  padding: 24px;
  text-decoration: none;
  background: linear-gradient(to bottom, #de0039, #70008c);
  box-shadow: 0 4px 4px 0px lightgray;
  display: flex;
  justify-content: center;
  align-items: center;

  .central-line {
    position: absolute;
    box-sizing: inherit;
    width: 1px;
    height: 290px;
    border-right: solid 1px ${transparentize(0.6, '#fff')};
  }

  .central-circle {
    position: absolute;
    width: 90px;
    height: 90px;
    border: 1px solid ${transparentize(0.6, '#fff')};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    :after {
      position: absolute;
      width: 1px;
      height: 1px;
      background-color: ${transparentize(0.6, '#fff')};
      content: '';
      border: 1px solid ${transparentize(0.6, '#fff')};
      border-radius: 50%;
    }
  }

  .players-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .player-mpp {
      font-size: 17px;
      color: #fff;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      margin-left: 15px;

      .mpph3-letters {
        margin-bottom: 15px;
      }

      .mpph3-numbers {
        border-bottom: 2px solid #fff;
        width: 60px;
        display: flex;
        justify-content: flex-end;
        margin-left: 90px;
      }

      .mpp-border {
        border: 2px dashed lightgray;
        width: 135px;
        height: 135px;
        line-height: 145px;
        vertical-align: middle;
        text-align: center;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        .most-picked-player {
          background: #fff;
          border: 1px solid #de0039;
          color: gray;
          width: 120px;
          height: 120px;
          line-height: 120px;
          vertical-align: middle;
          text-align: center;
          font-size: 45px;
          border-radius: 50%;
        }
      }
    }

    .player-lpp {
      font-size: 17px;
      color: lightgray;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      margin-left: 15px;

      .lpph3-letters {
        margin-bottom: 15px;
      }

      .lpph3-numbers {
        border-bottom: 2px solid lightgray;
        width: 60px;
        display: flex;
        justify-content: flex-end;
        margin-left: 90px;
      }

      .lpp-border {
        border: 2px dashed lightgray;
        width: 135px;
        height: 135px;
        line-height: 145px;
        vertical-align: middle;
        text-align: center;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        .less-picked-player {
          background: #fff;
          border: 1px solid #de0039;
          color: gray;
          width: 120px;
          height: 120px;
          line-height: 120px;
          vertical-align: middle;
          text-align: center;
          font-size: 45px;
          border-radius: 50%;
        }
      }
    }
  }
`;

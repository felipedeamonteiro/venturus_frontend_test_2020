import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  top: 0;
  position: fixed;
  height: 60px;
  background: linear-gradient(to right, #de0039, #a6006a);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-div {
    display: flex;
    align-items: center;
    padding-left: 60px;

    img {
      width: 50px;
      height: 50px;
      color: #fff;
    }

    h2 {
      color: #fff;
      padding-left: 15px;
    }
  }

  .right-div {
    display: flex;
    align-items: center;
    padding-right: 60px;

    h4 {
      color: #fff;
      padding-right: 10px;
    }

    .user-initials {
      clear: left;
      border: 1px solid transparent;
      background: #fff;
      color: #000;
      width: 40px;
      height: 40px;
      line-height: 40px;
      vertical-align: middle;
      text-align: center;
      font-size: 16px;
      border-radius: 50%;
    }
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;

  .left-container {
    background: #fff;
    border-radius: 15px;
    width: 45%;
    height: 800px;
    margin: 50px 40px 0;
    padding: 24px;
    display: block;
    text-decoration: none;
    box-shadow: 0 4px 4px 0px lightgray;

    button {
      width: 40px;
      height: 40px;
      color: #fff;
      border-radius: 10px;
      border: 1px solid #de0039;
      background: linear-gradient(to bottom, #de0039, #70008c);
      box-shadow: 0 4px 10px 1px #a6006a;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h1 {
      color: #70008c;
      font-weight: 700;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 25px;
      border-bottom: 1px solid lightgray;
    }
  }

  .right-container {
    width: 55%;

    .top-container {
      background: #fff;
      border-radius: 15px;
      height: 400px;
      margin: 5px 40px 0;
      padding: 24px;
      display: block;
      text-decoration: none;
      box-shadow: 0 4px 4px 0px lightgray;

      h1 {
        color: #70008c;
        font-weight: 700;
        padding-bottom: 25px;
        border-bottom: 1px solid lightgray;
      }

      .player-data {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: row;

        .pd-left-container {
          display: flex;
          flex-direction: column;
          width: 50%;
          height: 100%;

          h3 {
            margin-top: 10px;
          }

          .pd2-left-container {
            margin: 10px 0 0 10px;
            border-radius: 15px;
            background: #eddfe9;
            width: 90%;
            height: 90%;

            .team-info {
              width: 96%;
              height: 40px;
              padding: 8px;
              margin: 6px 0 0 4px;
              border-radius: 10px;
              background: #fff;
              display: flex;
              justify-content: space-between;
              align-items: center;

              &:hover {
                border: 2px solid #de0039;
              }
            }
          }
        }

        .pd-right-container {
          display: flex;
          flex-direction: column;
          width: 50%;
          height: 100%;

          h3 {
            margin-top: 10px;
          }

          .pd2-right-container {
            margin: 10px 0 0 10px;
            border-radius: 15px;
            background: #eddfe9;
            width: 90%;
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .team-info {
              width: 96%;
              height: 40px;
              padding: 8px;
              margin-top: 6px;
              border-radius: 10px;
              background: #fff;
              display: flex;
              justify-content: space-between;
              align-items: center;

              &:hover {
                border: 2px solid #de0039;
              }
            }
          }
        }
      }
    }

    .bottom-container {
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
        border-right: solid 1px ${shade(0.2, '#fff')};
      }

      .central-circle {
        position: absolute;
        width: 90px;
        height: 90px;
        border: 1px solid ${shade(0.2, '#fff')};
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
          border: 1px solid ${shade(0.2, '#fff')};
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
            border: 3px dashed lightgray;
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
            border: 3px dashed lightgray;
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
    }
  }
`;

export const Footer = styled.footer`
  height: 40px;
  background: #eddfe9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

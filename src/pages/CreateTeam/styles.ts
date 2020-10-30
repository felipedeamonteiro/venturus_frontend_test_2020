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
  justify-content: center;
  align-items: center;

  div.main-container {
    background: #fff;
    border-radius: 15px;
    width: 93%;
    height: 1230px;
    margin: 90px 40px 60px;
    padding: 24px;
    text-decoration: none;
    box-shadow: 0 4px 4px 0px lightgray;

    form {
      .upper-title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
      }
    }

    > h2 {
      padding-bottom: 25px;
      border-bottom: 1px solid lightgray;
      color: #70008c;
      font-weight: 700;
    }

    .team-information-form {
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .upper-info {
        margin-bottom: 80px;
        width: 75%;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .left-div {
          height: 320px;
          display: flex;
          flex-direction: column;

          label {
            margin-bottom: 10px;
          }
        }

        .right-div {
          display: flex;
          flex-direction: column;

          label {
            margin-bottom: 10px;
          }

          .tags-input {
            box-sizing: border-box;
            display: flex;
            flex-direction: column-reverse;

            .tags-input {
              resize: none;
              border: 1px solid grey;
              border-radius: 4px;
              padding: 5px;
              font-size: 16px;
              height: 100px;
              font-family: 'Roboto Slab', serif;

              &:focus {
                border: 1px solid #de0039;
              }
            }

            .tags-input:focus + label {
              color: #de0039;
            }
          }
        }
      }
    }

    .configure-squad-container {
      .bottom-title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px 0;
      }

      .bottom-info {
        display: flex;
        justify-content: space-between;
        margin: 0 160px;

        .bottom-right-div {
          label {
            margin-bottom: 10px;
          }

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

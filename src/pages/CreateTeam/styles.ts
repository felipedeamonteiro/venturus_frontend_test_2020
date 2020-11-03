import styled from 'styled-components';

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
          height: 320px;
          display: flex;
          flex-direction: column;

          label {
            margin-bottom: 10px;
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
        }
      }
    }
  }
`;

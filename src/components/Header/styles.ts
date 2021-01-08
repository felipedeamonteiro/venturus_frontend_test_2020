import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  top: 0;
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
    padding-right: 40px;

    .logout {
      margin-left: 40px;
      display: flex;
      align-items: center;
      flex-direction: column;
      color: #fff;
      cursor: pointer;
      background: none;
      border: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.4, '#70008c')};
      }
    }

    h4 {
      color: #fff;
      padding-right: 10px;
    }

    .user-initials {
      clear: left;
      border: 1px solid #de0039;
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

  @media only screen and (max-width: 375px) {
    padding: 5px 10px !important;

    .left-div {
      visibility: hidden;
      width: 0;
      padding: 0;
    }

    .right-div {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 380px) and (max-width: 415px) {
    .left-div {
      visibility: hidden;
      width: 0;
      padding: 0;
    }

    .right-div {
      display: flex;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 770px) {
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    h2 {
      padding-left: 0 !important;
      width: 350px;
    }

    .right-div {
      display: flex;
      justify-content: space-between;
      .user-initials {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      button {
        margin-left: 20px !important;
      }
    }
  }
`;

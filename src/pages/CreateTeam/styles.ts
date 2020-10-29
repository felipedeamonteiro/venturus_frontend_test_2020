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
    height: 1030px;
    margin: 90px 40px 60px;
    padding: 24px;
    display: block;
    text-decoration: none;
    box-shadow: 0 4px 4px 0px lightgray;

    .team-information-form {
    }

    .configure-squad-container {
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

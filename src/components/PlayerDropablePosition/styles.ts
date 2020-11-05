import styled from 'styled-components';
import { transparentize } from 'polished';

interface PositionProps {
  positionNumber: number;
}

export const Container = styled.div<PositionProps>`
  .player-position {
    border: 2px dashed ${transparentize(0.35, 'lightgray')};
    width: 65px;
    height: 65px;
    line-height: 65px;
    vertical-align: middle;
    text-align: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .player-position-center {
      z-index: 1;
      background: ${transparentize(0.35, '#fff')};
      border: 1px solid #de0039;

      width: 55px;
      height: 55px;
      line-height: 55px;
      vertical-align: middle;
      text-align: center;
      font-size: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: #fff;
      }
    }
  }
`;

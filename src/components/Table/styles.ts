import styled from 'styled-components';

export const Container = styled.div`
  /* .loading {
    animation-name: loading;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  } */
  border-bottom: 0 !important;
  table {
    width: 100%;
    margin-top: 50px;
    border-collapse: collapse;
    font-size: 15px;

    th,
    td {
      color: #414449;
      padding: 13px;
      text-align: left;
      line-height: 24px;
    }

    thead {
      th {
        color: #3c405f;
        padding: 15px 13px 13px;
        border-top: 0;
        height: 40px;

        span {
          float: right;
          margin-left: 15px;
        }

        :first-child {
          border-right: 1px solid lightgray;
          width: 160px;
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid lightgray;

        span {
          float: right;
          visibility: hidden;
        }

        &:hover {
          background: #fce9f7;
          width: 100%;
          span {
            visibility: visible;
            width: 75px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            cursor: pointer;
          }

          td {
            color: #de0093;
          }
        }
      }
    }
  }

  /* @keyframes loading {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.3;
    }
  } */
`;

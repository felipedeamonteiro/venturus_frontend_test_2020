import styled from 'styled-components';

export const Container = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;

    .loading {
      animation-name: loading;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
    }

    .setAmount {
      max-width: 200px;
      padding: 5px;
      align-self: flex-end;
      margin-bottom: 10px;
    }

    .table {
      width: 100%;
      border-radius: 10px;
      background-color: #fefefe;
      box-shadow: 10px 6px 6px rgba(0, 0, 0, 0.1);
      border-collapse: collapse;
      font-size: 15px;

      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      thead {
        background-color: #f2f2f2;
        border-bottom: 2px solid #95989a;
      }

      th,
      td {
        color: #414449;
        padding: 13px;
        text-align: left;
        line-height: 24px;

        :last-child {
          border-right: 0;
        }
      }

      th {
        color: #3c405f;
        padding: 26px 13px 13px;
        border-top: 0;
      }

      th > svg {
        margin-left: 8px;
      }

      td {
        input {
          font-size: 1rem;
          padding: 0;
          margin: 0;
          border: 0;
        }
      }
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: #414449;
      padding: 20px 0;

      & > button {
        border: 0;
        background-color: transparent;
        margin-right: 5px;
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }

      strong,
      b {
        color: #3c405f;
      }
    }

    .amount {
      margin-left: 10px;
    }
  }

  @keyframes loading {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.3;
    }
  }
`;

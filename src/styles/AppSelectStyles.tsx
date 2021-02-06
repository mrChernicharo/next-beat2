import styled from 'styled-components';

export const AppSelectContainer = styled.div`
  border: 1px solid;
  height: 36px;
  font-size: 12px;
  flex-direction: column;
  border-radius: 2px;
  transition: 0.8s;

  .label {
    border: 1px solid;
  }
  .value {
    border: 1px solid;
    cursor: pointer;

    &:hover {
      background: #02ffab;
    }
  }
  .dropdown {
    border: 1px solid;
    display: block;
    background: #32333c;

    .option {
      border: 1px solid;
      cursor: pointer;

      &:hover {
        background: #02ffab;
      }
    }
  }
`;

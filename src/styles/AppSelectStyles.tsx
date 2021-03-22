import styled from 'styled-components';

interface ISelectProps {
  opened: boolean;
  disabled: boolean;
}

export const AppSelectContainer = styled.div`
  height: 36px;
  min-width: 70px;
  font-size: 12px;
  flex-direction: column;
  border-radius: 2px;
  z-index: ${(props: ISelectProps) => (props.opened ? 5 : 3)};

  pointer-events: ${props => (props.disabled ? 'none' : 'all')};
  color: ${props => (props.disabled ? '#777' : '#fff')};

  .label {
    border: 1px solid;
    font-size: 10px;
    padding: 0 4px;

    &:focus {
      box-shadow: 0px 0px 4px 1px #2196f3;
    }
  }
  .value {
    border: 1px solid;
    padding: 0 4px;

    cursor: pointer;

    &:hover {
      background: #2196f3;
    }
  }
  .dropdown {
    border: 1px solid;
    display: block;
    background: #32333c;
    position: absolute;
    margin-top: -18px;
    width: 71px;
    z-index: ${(props: ISelectProps) => (props.opened ? 5 : 4)};

    .option {
      border: 1px solid;
      padding: 0 4px;

      cursor: pointer;
      z-index: ${(props: ISelectProps) => (props.opened ? 5 : 4)};

      &:hover {
        background: #2196f3;
      }
    }
  }
`;

export const Overlay = styled.div`
  /* display: none; */

  &.select-overlay {
    /* display: block; */
    visibility: ${(props: ISelectProps) => (props.opened ? 'visible' : 'hidden')};
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 240, 255, 0.1);
    top: 0;
    left: 0;
    z-index: 2;
    position: fixed;
  }
`;

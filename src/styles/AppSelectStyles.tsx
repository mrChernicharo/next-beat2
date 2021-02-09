import styled from 'styled-components';

interface ISelectProps {
  opened: boolean;
  disabled: boolean;
}

export const AppSelectContainer = styled.div`
  height: 36px;
  min-width: 60px;
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
  }
  .value {
    border: 1px solid;
    padding: 0 4px;

    cursor: pointer;

    &:hover {
      background: #02ffab;
    }
  }
  .dropdown {
    border: 1px solid;
    display: block;
    background: #32333c;
    z-index: ${(props: ISelectProps) => (props.opened ? 5 : 4)};

    .option {
      border: 1px solid;
      padding: 0 4px;

      cursor: pointer;
      z-index: ${(props: ISelectProps) => (props.opened ? 5 : 4)};

      &:hover {
        background: #02ffab;
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

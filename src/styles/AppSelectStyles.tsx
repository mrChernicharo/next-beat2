import styled from 'styled-components';

interface ISelectProps {
  opened: boolean;
  disabled: boolean;
}

export const AppSelectContainer = styled.div`
  /* border: 1px solid blue; */
  height: 36px;
  min-width: 82px;
  font-size: 12px;
  flex-direction: column;
  border-radius: 2px;
  z-index: ${(props: ISelectProps) => (props.opened ? 3 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};
  color: ${props => (props.disabled ? '#777' : '#fff')};
  padding: 0 2px;

  .label-container {
    font-size: 10px;
    display: flex;

    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
  .value {
    border: 1px solid;
    padding: 0 4px;

    cursor: pointer;

    &:hover {
      box-shadow: 0 0 2px #fff;
      text-shadow: 0 0 2px #fff;
    }
  }
  .dropdown {
    border: 1px solid;
    display: block;
    background: #32333c;
    z-index: ${(props: ISelectProps) => (props.opened ? 3 : 2)};

    .option {
      border: 1px solid;
      padding: 0 4px;

      cursor: pointer;
      z-index: ${(props: ISelectProps) => (props.opened ? 3 : 2)};

      &:hover {
        box-shadow: 0 0 2px #fff;
        text-shadow: 0 0 2px #fff;
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
    background-color: rgba(200, 240, 255, 0.01);
    top: 0;
    left: 0;
    z-index: 2;
    position: fixed;
  }
`;

import styled from 'styled-components';

interface ISelectProps {
  opened: boolean;
}

export const AppSelectContainer = styled.div`
  border: 1px solid;
  height: 36px;
  font-size: 12px;
  flex-direction: column;
  border-radius: 2px;
  z-index: ${(props: ISelectProps) => (props.opened ? 5 : 3)};
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
    z-index: ${(props: ISelectProps) => (props.opened ? 5 : 4)};

    .option {
      border: 1px solid;
      cursor: pointer;
      z-index: ${(props: ISelectProps) => (props.opened ? 5 : 4)};

      &:hover {
        background: #02ffab;
      }
    }
  }
`;

export const Overlay = styled.div`
  visibility: ${(props: ISelectProps) => (props.opened ? 'visible' : 'hidden')};
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 240, 255, 0.1);
  top: 0;
  left: 0;
  z-index: 2;
  position: absolute;
`;

import styled from 'styled-components';

// interface IControlProps {
//   disabled: boolean;
// }

interface IBtnProps {
  disabled: boolean;
  add?: boolean;
  remove?: boolean;
}

export const InstrumentsControlContainer = styled.div`
  border: 1px solid;
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  width: 120px;

  .title-container {
    border: 1px solid;
    border-bottom: none;
    justify-content: center;

    span {
      line-height: 16px;
    }
  }

  .btn-container {
    border: 1px solid;
    padding: 4px;
  }
`;
export const InstrumentsControlBtn = styled.button`
  width: 50%;
  background: transparent;
  color: #fff;
  font-size: 18px;
  border: 1px solid;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  outline: none;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }

  :active {
    box-shadow: inset 0 0 10px 0 rgba(255, 255, 255, 0.4);
  }
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};
  color: ${props => (props.disabled ? '#777' : '#fff')};
  margin-right: ${(props: IBtnProps) => (props.add ? '4px' : '')};
`;

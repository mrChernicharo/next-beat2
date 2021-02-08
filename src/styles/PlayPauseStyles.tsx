import styled from 'styled-components';

interface IPlayProps {
  key: string;
}
export const PlayPauseContainer = styled.div`
  border: 1px solid;
  // 100%;
  height: 100%;
  padding: 4px;
`;

export const PlayPauseBtn = styled.button`
  background: transparent;
  color: #fff;
  font-size: 56px;
  border: none;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  outline: none;
  cursor: pointer;
  transition: 0.4s;

  h1 {
    line-height: 68px;

    :active {
      box-shadow: inset 0 0 10px 0 rgba(255, 255, 255, 0.4);
    }

    svg {
    }
  }
`;

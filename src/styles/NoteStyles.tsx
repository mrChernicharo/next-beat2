import styled from 'styled-components';

interface INoteContainerProps {
  id: string;
  shouldPlay: boolean;
}

export const NoteContainer = styled.div`
  border: 1px solid;
  min-width: 20px !important;
  height: 20px !important;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props: INoteContainerProps) =>
    props.shouldPlay ? 'blue' : 'transparent'};

  &.current-note {
    border-bottom: 3px solid #9b119b;
  }

  &[id*='beat-1-'] {
    margin-left: 4px;
  }
`;

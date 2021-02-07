import styled from 'styled-components';

interface INoteContainerProps {
  id: string;
  shouldPlay: boolean;
}

export const NoteContainer = styled.div`
  border: 1px solid;
  width: 20px;
  height: 20px;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: INoteContainerProps) =>
    props.shouldPlay ? 'blue' : 'transparent'};

  &.current-note {
    border-bottom: 2px solid red;
  }
`;

import styled from 'styled-components';

interface INoteContainerProps {
  id: string;
  shouldPlay: boolean;
  beat: string;
  click: string;
  bar: string;
}

export const NoteContainer = styled.div`
  border: 1px solid;
  min-width: 20px !important;
  height: 20px !important;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  background-color: ${(props: INoteContainerProps) =>
    props.shouldPlay ? 'blue' : 'transparent'};

  &.current-note {
    border-bottom: 3px solid #9b119b;
  }

  span {
    pointer-events: none;
  }
`;

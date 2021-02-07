import styled from 'styled-components';

interface INoteContainerProps {
  id: string;
  shouldPlay: boolean;
}

export const NoteContainer = styled.div`
  border: 1px solid;
  padding: 4px;
  background-color: ${(props: INoteContainerProps) =>
    props.shouldPlay ? 'blue' : 'green'};
`;

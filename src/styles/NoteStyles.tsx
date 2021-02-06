import styled from 'styled-components';

interface INoteContainerProps {
  shouldPlay: boolean;
}

export const NoteContainer = styled.div`
  border: 1px solid;
  padding: 16px;
  background-color: ${(props: INoteContainerProps) =>
    props.shouldPlay ? 'blue' : 'green'};
`;

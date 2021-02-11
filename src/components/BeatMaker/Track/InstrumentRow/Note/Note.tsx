import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface INoteProps {
  id: string;
  position: number;
  rowIndex: number;
  play: boolean;
  changeNote: Function;
}

export default function Note() {
  const beat = 1;

  function toggleActive() {}
  return (
    <NoteContainer shouldPlay={false}>
      {beat === 1 ? <span>○</span> : <span>_</span>}
    </NoteContainer>
  );
}
const NoteContainer = styled.div`
  border: 1px solid;
  min-width: 20px !important;
  height: 20px !important;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  background-color: ${(props: { shouldPlay: boolean }) =>
    props.shouldPlay ? 'blue' : 'transparent'};

  &.current-note {
    border-bottom: 3px solid #9b119b;
  }

  span {
    pointer-events: none;
  }
`;

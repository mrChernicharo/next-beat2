import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

interface INoteProps {
  id: string;
  position: number;
  rowIndex: number;
  play: boolean;
  changeNote: Function;
}

function Note({ id, position, rowIndex, play, changeNote }: INoteProps) {
  const [active, setActive] = useState(play);
  const beat = id.substr(11, 1);
  const click = id.substr(19, 1);
  const bar = id.substr(25, 1);

  useEffect(() => {
    // console.log('note touched!');
    changeNote(active, rowIndex, position);
  }, [active, play]);

  function toggleActive() {
    setActive(!active);
  }
  return (
    <NoteContainer
      beat={beat}
      click={click}
      bar={bar}
      id={id}
      shouldPlay={active}
      onClick={() => toggleActive()}
      className="note"
    >
      {beat === '1' ? <span>○</span> : <span>_</span>}
    </NoteContainer>
  );
}

export default memo(Note);

//****************************************************//

interface INoteContainerProps {
  id: string;
  shouldPlay: boolean;
  beat: string;
  click: string;
  bar: string;
}

export const NoteContainer = styled.div`
  border: 1px solid;
  border-radius: 3px;
  min-width: 20px !important;
  height: 20px !important;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  background: ${(props: INoteContainerProps) =>
    props.shouldPlay ? 'linear-gradient(270deg, #7a6ded, #591885)' : 'transparent'};
  transform: translateY(-6px);

  &.current-note {
    border-bottom: 3px solid #9b119b;
    transform: ${props => (props.shouldPlay ? 'scale(1.2) translateY(-6px)' : '')};
  }

  span {
    pointer-events: none;
  }
`;
